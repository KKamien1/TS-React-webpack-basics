import React, { Fragment, Suspense, useContext } from "react";
import { Store } from "./store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction } from "./Actions";
const EpisodesList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);
  const props: IEpisodeProps = {
    episodes: state.favourites,
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
}
