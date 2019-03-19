import React, { Fragment, useContext } from "react";

import { Store } from "./store";

export default function App(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  return (
    <Fragment>
      {console.log(state)}
      <h1>Rick and Morthy</h1>
      <p>Pick your favourite episode!!!</p>
    </Fragment>
  );
}
