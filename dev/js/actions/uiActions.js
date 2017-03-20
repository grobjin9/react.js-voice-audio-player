const constants = require('../constants/uiConstants');

const changeCurrentTab = function (tab) {
  return {
    type: constants.CHANGE_CURRENT_TAB,
    tab
  };
};

module.exports = {
  changeCurrentTab
};