const React = require('react'),
      ReactDOM = require('react-dom'),
      {Provider} = require('react-redux'),
      App = require('./containers/App'),
      store = require('./reducers/store');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);