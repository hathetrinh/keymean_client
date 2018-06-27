import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import IndexReducer from './setup/index-reducer';
import IndexSagas from './setup/index-sagas';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const enhancers = []
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(
  IndexReducer,
  composedEnhancers
);

sagaMiddleware.run(IndexSagas);
