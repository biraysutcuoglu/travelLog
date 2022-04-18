import { useContext } from "react";
import WishlistContext from "../../store/wishlist-context";
import React from "react";
import classes from "./LayoutLabel.module.css";

const WishListLabel = (props) => {
  const wishlistctx = useContext(WishlistContext);
  const numberOfWishlistItems = wishlistctx.items.length; //number of places

  return (
    <div className={classes.layoutlabel} onClick={props.onClick}>
      <h4>wishlist</h4>
      <span className={classes.badge}>{numberOfWishlistItems}</span>
    </div>
  );
};
export default WishListLabel;
