import classes from "./SiteItem.module.css";
import React from "react";
import SiteItemForm from "./SiteItemForm";
import { useContext } from "react";
import WishlistContext from '../../../store/wishlist-context';

const SiteItem = (props) => {
  const wishlistCtx = useContext(WishlistContext);
  const addToWishlistHandler = enteredDate => {
    wishlistCtx.addItem({
      id: props.id,
      name: props.name,
      date: props.date
    });
  };

  return <li className={classes.site}>
      <div>
      <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.country}>{props.country}</div>
      </div>
      <div><SiteItemForm id={props.id} onAddToWishlist={addToWishlistHandler}/></div>
  </li>;
};
export default SiteItem;
