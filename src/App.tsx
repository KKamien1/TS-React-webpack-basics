import React, { Fragment, useContext } from "react";
import { Store } from "./store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morthy</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourites: {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}
