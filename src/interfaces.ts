export type Dispatch = React.Dispatch<IAction>;

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (state: IState, dispatch: any, episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}

export interface IState {
  episodes: Array<any>;
  favourites: Array<any>;
}
export interface IAction {
  type: string;
  payload: Array<IEpisode>;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
