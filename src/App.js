import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

// FIREBASE: To make our app aware that the user has signed up with Google
import { auth } from "./firebase/firebase.utils";

import "./App.css";

// Class component, since we need access to the state for handling the user auth
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  // This is an open subscription
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(`State of the current user: ${this.state.currentUser}`);
    });
  }
  // We need to close the open subscription when it ithe app is unmount from the DOM
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <div className="App">
          <Header currentUser={this.state.currentUser} />
          {/* <HomePage></HomePage> */}

          {/* Switch: The moment it finds a match, it will not render any other route */}
          <Switch>
            {/* 'exact': the path has to be equal to the url provided */}
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
