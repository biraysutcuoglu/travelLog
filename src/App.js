import "./App.css";
import Header from "./components/layout/Header.js";
import Explore from "./components/explore/Explore";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Explore />
      </main>
    </Fragment>
  );
}

export default App;
