import { ApolloServer } from "apollo-server";
import { typeDefs } from "./core/typeDefs";
import resolvers from "./core/resolvers/index";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5781;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
});
server.listen({ port: port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
