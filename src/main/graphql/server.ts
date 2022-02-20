import { ApolloServer } from 'apollo-server';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

export const server = new ApolloServer({
  resolvers,
  typeDefs
});

const port = 3000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
