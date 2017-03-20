const rootReducer = require('./rootReducer'),
      {createStore, applyMiddleware} = require('redux'),
      thunk = require('redux-thunk').default;
      // logger = require('redux-logger')();

const middlewares = [thunk];

const middleWare = applyMiddleware(...middlewares);
const store = createStore(rootReducer, middleWare);

module.exports = store;