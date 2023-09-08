const Pool = require('pg').Pool
const poolObject = new Pool({
  user: 'srijeetpatil',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

module.exports = poolObject;