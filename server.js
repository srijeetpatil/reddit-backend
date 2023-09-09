var express = require("express");
var express_graphql = require("express-graphql").graphqlHTTP;

const schema = require("./schema");
const root = require("./graphql");

var app = express();
app.use(
  "/graphql",
  express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/graphql")
);
