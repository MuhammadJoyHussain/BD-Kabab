import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk]


export const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
