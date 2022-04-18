import Modal from "../UI/Modal";
import classes from "./Wishlist.module.css";

const Wishlist = (props) => {
  const wishlistItems = (
    <ul className={classes.wishlistItems}>
      {[{ id: "s1", name: "Saint Paul", country: "UK" }].map((site) => (
        <li>{site.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {wishlistItems}
      <div className={classes.actions}>
        <button onClick={props.onClose}>x</button>
      </div>
    </Modal>
  );
};
export default Wishlist;
