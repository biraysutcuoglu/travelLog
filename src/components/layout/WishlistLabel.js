import { useContext, useEffect, useState } from "react";
import WishlistContext from "../../store/wishlist-context";
import React from "react";
import classes from "./LayoutLabel.module.css";

const WishListLabel = (props) => {
  const [labelIsHighlighted, setLabelHighlighted] = useState(false);
  const wishlistctx = useContext(WishlistContext);
  const numberOfWishlistItems = wishlistctx.items.length; //number of places

  const { items } = wishlistctx;
  const wishlistLabelClasses = `${classes.layoutlabel} ${
    labelIsHighlighted ? classes.bump : ""
  }`; //bump whenever wishlist content changes

  useEffect(() => {
    if (wishlistctx.items.length === 0) {
      return;
    }
    setLabelHighlighted(true);
    //to bump in every add remove the class
    const timer = setTimeout(() => {
      setLabelHighlighted(false);
    }, 300);
    
    //cleanup function to clean timer
    return () => {
      clearTimeout(timer);
    };
  }, [items]); //pass effect function and array of dependencies (only items in this case)

  return (
    <div className={wishlistLabelClasses} onClick={props.onClick}>
      <h4>wishlist</h4>
      <span className={classes.badge}>{numberOfWishlistItems}</span>
    </div>
  );
};
export default WishListLabel;
