const constants = require('../constants/dataConstants');

const updateData = function (data) {
  return {
    type: constants.UPDATE_DATA,
    data
  };
};

module.exports = {
  updateData
};