import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  return (
    <li className={classes["wishlist-item"]}>
      <div className={classes.summary}>
        <h2>{props.name}</h2>
        <div>
          <span>{props.country}</span>
          <span>{props.date}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>plan-a-trip</button>
        </div>
        <span></span>
      </div>
    </li>
  );
};

export default WishlistItem;
