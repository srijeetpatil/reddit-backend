const { getAllUsers } = require("../queries/queries");

const { createAccountMutation } = require("../mutations/mutations");

module.exports = {
  users: getAllUsers,
  createAccount: createAccountMutation,
};
