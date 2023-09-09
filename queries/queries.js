const { getAllUsersFromDB } = require("../model");

const getAllUsers = async () => {
  const users = await getAllUsersFromDB();
  return users;
};

module.exports = {
  getAllUsers,
};
