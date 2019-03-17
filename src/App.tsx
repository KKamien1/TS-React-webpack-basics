import React, { Fragment, useContext } from "react";

import { Store } from "./store";

export default function App(): JSX.Element {
  const store = useContext(Store);
  return (
    <Fragment>
      {console.log(store)}
      <h1>Rick and Morthy</h1>
      <p>Pick your favourite episode!!!</p>
    </Fragment>
  );
}
