import classes from "./SiteItem.module.css";
import React from "react";

const SiteItem = (props) => {
  return <li className={classes.site}>
      <div>
      <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.country}>{props.country}</div>
      </div>
  </li>;
};
export default SiteItem;
