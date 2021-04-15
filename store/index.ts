import { createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import reducer from '../store/reducers';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension');
      return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const makeStore: MakeStore<{}> = () => {
  const store = createStore(reducer, {}, bindMiddleware([]));
  return store
}

const wrapper = createWrapper<{}>(makeStore, { debug: true });

export default wrapper;