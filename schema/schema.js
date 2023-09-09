var { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Query {
        users: [User]
    }
    type Mutation {
        createAccount(input: createAccountInput): Boolean
    }
    type User {
        username: String
        password: String
        uid: Int
        karma: Int
    }
    input createAccountInput {
        username: String!
        password: String!
    }
`);

module.exports = schema;
