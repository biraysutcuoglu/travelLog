import "./App.css";
import Header from "./components/layout/Header.js";
import Explore from "./components/explore/Explore";
import { Fragment } from "react";
import Wishlist from "./components/wishlist/Wishlist";

function App() {
  return (
    <Fragment>
      <Wishlist/>
      <Header />
      <main>
        <Explore />
      </main>
    </Fragment>
  );
}

export default App;
