//manages wishlist-context data
//and provides this context to all components want to access to it
//wrap all component that need access to wishlist

import WishlistContext from "./wishlist-context";
import { useReducer } from "react";

const defaultWishlistState = {
  items: [],
  totalAmount: 0,
  date: "",
};

const wishlistReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item); //adds new item to array by returning a new array (immutable)
    const updatedTotalAmount = state.totalAmount + 1;
    const updatedDate = state.date;
    return {
      //return a new state snapshot
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      date: updatedDate,
    };
  }
  return defaultWishlistState;
}; //will not need any data from the component

const WishlistProvider = (props) => {
  const [wishlistState, dispatchWishlistAction] = useReducer(
    wishlistReducer,
    defaultWishlistState
  );

  const addItemToWishlistsHandler = (item) => {
    dispatchWishlistAction({ type: "ADD", item: item });
  };
  const removeItemFromWishlistHandler = (id) => {
    dispatchWishlistAction({ type: "REMOVE", id: id });
  };

  const wishlistContext = {
    items: wishlistState.items,
    totalAmount: wishlistState.totalAmount,
    date: wishlistState.date,
    addItem: addItemToWishlistsHandler,
    removeItem: removeItemFromWishlistHandler,
  };

  return (
    <WishlistContext.Provider value={wishlistContext}>
      {props.children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
