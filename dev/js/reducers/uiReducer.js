const initialState = require('./initialState'),
      constants = require('../constants/uiConstants');

function uiReducer(store = initialState.ui, action) {
  switch (action.type) {
    case constants.CHANGE_CURRENT_TAB:
      return Object.assign({}, store, {
        currentTab: action.tab
      });
    default:
      return store;
  }
}

module.exports = uiReducer;
