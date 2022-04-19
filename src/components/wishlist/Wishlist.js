import Modal from "../UI/Modal";
import classes from "./Wishlist.module.css";
import { useContext } from "react";
import WishlistContext from "../../store/wishlist-context";
import WishlistItem from "./WishlistItem";

const Wishlist = (props) => {
  const wishlistCtx = useContext(WishlistContext);
  const enteredDate = wishlistCtx.date;
  const hasItems = wishlistCtx.items.length > 0;

  const wishlistItemRemoveHandler = (id) => {};
  const wishlistItemAddHandler = (item) => {};

  const wishlistItems = (
    <ul className={classes.wishlistItems}>
      {wishlistCtx.items.map((item) => (
        <WishlistItem
          key={item.id}
          name={item.name}
          country={item.country}
          date={enteredDate}
          onRemove={wishlistItemRemoveHandler.bind(null, item.id)}
          onAdd={wishlistItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {wishlistItems}
      <div className={classes.actions}>
        <button onClick={props.onClose}>x</button>
        {hasItems && <button className={classes.button}>plan a visit</button>}
      </div>
    </Modal>
  );
};
export default Wishlist;
