const pool = require("../config/dbConfig");
const { generateHash } = require("../utils");

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

const createAccount = async (userDetails) => {
  return new Promise(async (resolve, reject) => {
    const { username, password } = userDetails;
    const hash = await generateHash(password);
    pool.query(
      `insert into users(username, password, uid) values('${username}', '${hash}', 0)`,
      (error) => {
        if (error) {
          throw reject(error);
        }

        return resolve(true);
      }
    );
  });
};

module.exports = {
  getAllUsersFromDB,
  createAccount,
};
