const initialState = require('./initialState'),
    constants = require('../constants/dataConstants');

function dataReducer(state = initialState.data, action) {
  switch (action.type) {
    case constants.UPDATE_DATA:
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

module.exports = dataReducer;