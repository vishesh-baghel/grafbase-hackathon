const fs = require("fs");
// const { printSchema } = require("graphql");
// const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

// const UserType = new GraphQLObjectType({
//   name: "Userss",
//   fields: {
//     id: { type: GraphQLString, resolve: () => "hello" },
//     name: { type: GraphQLString, resolve: () => "hello" },
//     email: { type: GraphQLString, resolve: () => "hello" },
//   },
// });

// const QueryType = new GraphQLObjectType({
//   name: "Query",
//   fields: {
//     oooo: {
//       type: GraphQLString,
//       resolve: () => "Hello, world!",
//     },
//   },
// });

// const schema = new GraphQLSchema({
//   query: QueryType,
//   mutation: UserType,
// });

// const schemaString = printSchema(schema);

const typeVariables = {
  name: "Carssd",
  directives: "@model",
};

const schemaString = `
type ${typeVariables.name} ${typeVariables.directives} {
  user: User
  vote: Int @default(value: 0)
}`;

const newContent = "\n" + schemaString + "\n";

const path = "./grafbase/schema.graphql";

fs.readFile(path, (err, data) => {
  const content = data.toString();

  if (content.includes(newContent)) {
    console.log("model type definition is already present");
    return;
  }

  fs.appendFile(path, newContent, (err) => {
    if (err) throw err;
    console.log("file is updated");
  });
});

// fs.writeFile(path, newContent, { flag: "a+" }, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("File is updated.");
// });
