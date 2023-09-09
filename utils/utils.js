const bcrypt = require("bcrypt");
const saltRounds = 10;

const generateHash = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

const validateUser = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return await bcrypt.compare(password, hash);
};

module.exports = {
  generateHash,
  validateUser,
};
