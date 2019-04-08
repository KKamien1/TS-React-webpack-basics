import React, { Fragment, Suspense, useContext } from "react";
import { Store } from "./store";
import { IEpisode, IAction, IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions";
const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default HomePage => {
  const { state, dispatch } = useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites
  };
  return (
    <Fragment>
      <Suspense fallback="{<div>loading ...</div> }">
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
};
