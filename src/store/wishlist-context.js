//store application-wide context
import React from "react";

const WishlistContext = React.createContext({
  items: [],
  totalAmount: 0,
  date: "",
  addItem: (item) => {}, //receives the item should be added
  removeItem: (id) => {},
});

export default WishlistContext;
