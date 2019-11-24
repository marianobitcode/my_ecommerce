import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// FIREBASE
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

//  Class component because we have to store what the user is typing in
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      console.log("here");

      await auth.signInWithEmailAndPassword(email, password);
      // In case of sucess, we will clear our state
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    // DINAMICALLY SETTING PROPERTY VALUE: GREAT EXAMPLE ON how to refer to a property using a variable

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          {/* 'required' is a native HTML attribute */}
          {/* <input */}
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            // onChange={this.handleChange}
            handleChange={this.handleChange}
            label="email"
            required
          />
          {/* <label>Email</label> */}
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            // onChange={this.handleChange}
            handleChange={this.handleChange}
            label="password"
            required
          />
          {/* <label>Password</label> */}

          <div className="buttons">
            {/* <input type="submit" value="Submit form" />*/}
            <CustomButton type="submit">Sign in</CustomButton>
            {/* A pop-up window will show all Google account we have */}
            {/* Passing the 'isGoogleSignIn' evaluates to true when the CustomButton component receives it */}
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
