import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { routerMiddleware, routerReducer as routing } from 'react-router-redux';
import thunk from 'redux-thunk';

import MovieReducer from './Reducers/MovieReducer';
import TVReducer from './Reducers/TVReducer';
import DetailsReducer from './Reducers/DetailsReducer';
import EpisodeDetailsReducer from './Reducers/EpisodeDetailsReducer';
import TrailerReducer from './Reducers/TrailerReducer';
import SearchReducer from './Reducers/SearchReducer';

export default function configureStore(initialState, routerHistory) {
  const router = routerMiddleware(routerHistory);

  const reducers = {
    movies: MovieReducer,
    tv: TVReducer,
    details: DetailsReducer,
    episodes: EpisodeDetailsReducer,
    trailer: TrailerReducer,
    search: SearchReducer,
    routing
  };

  const middlewares = [ thunk, router ];

  const composeEnhancers = (() => {
    return compose;
  })();

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const rootReducer = combineReducers(reducers);

  return createStore(rootReducer, initialState, enhancer);
}
