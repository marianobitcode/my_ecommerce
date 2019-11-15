import React from "react";

import "./homepage.styles.scss";

import Directory from "../../components/directory/directory.component";

// FUNCTIONAL COMPONENT: We don't need any lifecycle method here nor we need to store any state
const HomePage = () => (
  <div className="homepage">
    <Directory></Directory>
  </div>
);

export default HomePage;
