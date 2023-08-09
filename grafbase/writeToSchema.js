const fs = require("fs");
const { printSchema } = require("graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

// Define types
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
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

// Create schema object
const schema = new GraphQLSchema({
  // query: QueryType,
  user: UserType,
});

// const schemaObject = UserType;

// Convert schema to string
const schemaString = printSchema(schema);

const content = schemaString;

fs.writeFileSync("schema.graphql", content, { flag: "a+" }, (err) => {
  if (err) {
    throw err;
  }
  console.log("File is updated.");
});
