var { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        users: [User]
    }
    type User {
        username: String
        password: String
        uid: Int
        karma: Int
    }
`);

module.exports = schema;
