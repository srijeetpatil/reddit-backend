const { createAccount } = require("../model");

const createAccountMutation = async (args) => {
  const { input } = args;
  return await createAccount(input);
};

module.exports = {
  createAccountMutation,
};
