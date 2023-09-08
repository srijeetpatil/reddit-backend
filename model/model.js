const pool = require("../config/dbConfig");

const getAllUsersFromDB = async () => {
  return new Promise((resolve, reject) => {
    let data = [];
    pool.query("select * from users", (error, results) => {
      if (error) {
        throw reject(error);
      }
      data = results.rows;

      resolve(data);
    });
  });
};

module.exports = {
  getAllUsersFromDB,
};
