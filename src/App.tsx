import React, { Fragment, Suspense, useContext } from "react";

import { Store } from "./store";
import { IEpisode, IAction } from "./interfaces";

const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

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
  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    return dispatch({
      type: episodeInFav ? "REMOVE_FAV" : "ADD_FAV",
      payload: episode
    });
  };

  const props = {
    episodes: state.episodes,
    toggleFavAction,
    favourites: state.favourites
  };

  return (
    <Fragment>
      {console.log(state)}
      <header className="header">
        <div>
          <h1>Rick and Morthy</h1>
          <p>Pick your favourite episode!!!</p>
        </div>
        <div>Favourites: {state.favourites.length}</div>
      </header>
      <Suspense fallback="{<div>loading ...</div> }">
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
}
