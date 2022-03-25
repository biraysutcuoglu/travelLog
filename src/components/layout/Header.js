import { Fragment } from "react";
import classes from "./Header.module.css";
import MyVisitsLabel from "./MyVisitsLabel";
import WishListLabel from "./WishlistLabel";
import PlanVisitsLabel from "./PlanVisitsLabel";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>travel-log.</h1>
          <MyVisitsLabel />
          <WishListLabel />
          <PlanVisitsLabel />
      </header>
    </Fragment>
  );
};
export default Header;
