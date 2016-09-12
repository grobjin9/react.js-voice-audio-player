const   rootReducer = require('./rootReducer'),
        { createStore, applyMiddleware } = require('redux'),
        logger = require('redux-logger'),
        thunk = require('redux-thunk').default;

const middleWare = applyMiddleware(thunk);
const store = createStore(rootReducer, middleWare);

module.exports = store;