const { getAllUsersFromDB } = require("../model/model");

const getAllUsers = async () => {
  const users = await getAllUsersFromDB();
  return users;
};

module.exports = {
  getAllUsers,
};
