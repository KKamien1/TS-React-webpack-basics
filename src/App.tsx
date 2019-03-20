import React, { Fragment, useContext } from "react";

import { Store } from "./store";
import { number, string } from "prop-types";

import { IEpisode, IAction } from "./interfaces";

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
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt="{`Rick and Mort ${episode.name}` }"
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Seasion: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  {state.favourites.find(
                    (fav: IEpisode) => episode.id === fav.id
                  )
                    ? "Unfav"
                    : "Fav"}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </Fragment>
  );
}
