const { getAllUsers } = require("../queries/queries");

module.exports = {
  users: getAllUsers,
};
