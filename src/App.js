import "./App.css";
import Header from "./components/layout/Header.js";
import Explore from "./components/explore/Explore";
import { useState } from "react";
import Wishlist from "./components/wishlist/Wishlist";
import WishlistProvider from "./store/WishlistProvider";

function App() {
  const [wishlistIsShown, setWishlistState] = useState(false);

  const showWishlistHandler = () => { //wishlist button is placed in HEADER
    setWishlistState(true);
  };

  const hideWishlistHandler = () => {
    setWishlistState(false);
  };

  return (
    <WishlistProvider>
      {wishlistIsShown && <Wishlist onWishlist={hideWishlistHandler} onClose={hideWishlistHandler}/>}
      <Header onWishlist={showWishlistHandler} />
      <main>
        <Explore />
      </main>
    </WishlistProvider>
  );
}

export default App;
