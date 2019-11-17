import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const hatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HomePage></HomePage> */}

        {/* Switch: The moment it finds a match, it will not render any other route */}
        <Switch>
          {/* 'exact': the path path has to be equal to the url provided */}
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={hatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
