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
    const existingWishlistItemIndex = state.items.findIndex(
      //find the index of item with the same name (not found -1)
      (item) => item.name === action.item.name
    );

    let updatedItems;
    if (existingWishlistItemIndex === -1) {
      //add
      updatedItems = state.items.concat(action.item);
    } else {
      console.log("Already in wishlist.");
      updatedItems = [...state.items];
    }

    const updatedTotalAmount = state.totalAmount + 1;
    const updatedDate = state.date;
    return {
      //return a new state snapshot
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      date: updatedDate,
    };
  }
  if (action.type === "REMOVE") {
    console.log(state.items);
    //console.log(action.name);

    const existingWishlistItemIndex = state.items.findIndex(
      (item) => item.name === action.name
    );

    const updatedTotalAmount = state.totalAmount - 1;
    let updatedItems;
    if (existingWishlistItemIndex !== -1) {
      updatedItems = state.items.filter(
        //returns filtered new array
        item => item.name !== action.name //only take objects different than current item (to be removed item)
      );
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
  const removeItemFromWishlistHandler = (name) => {
    dispatchWishlistAction({ type: "REMOVE", name: name });
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
