import React from "react";

//HIGHER ORDER COMPONENT: A f. which takes a component modifying and returning it
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

// We have access to 'history' 'match' and 'location' because we're using withRouter
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// withRouter: this way we will get access to these 3 props related with our router: history location and match
export default withRouter(MenuItem);
