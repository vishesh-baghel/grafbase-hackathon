const fs = require("fs");
const { printSchema } = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString, resolve: () => "hello" },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello, world!",
    },
  },
});

const schema = new GraphQLSchema({
  query: QueryType,
  user: UserType,
});

const schemaString = printSchema(schema);

const content = "\n" + schemaString + "\n";

const path = "./grafbase/schema.graphql";

fs.writeFile(path, content, { flag: "a+" }, (err) => {
  if (err) {
    throw err;
  }
  console.log("File is updated.");
});
