import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// FIREBASE
import { signInWithGoogle } from "../../firebase/firebase.utils";

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

  handleSubmit = event => {
    event.prevenDefault();
    this.setState({ email: "", password: "" });
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

          {/* <input type="submit" value="Submit form" />*/}
          <CustomButton type="submit">Sign in</CustomButton>
          {/* A pop-up window will show all Google account we have */}
          <CustomButton onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
