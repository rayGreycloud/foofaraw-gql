import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

import { resolvers, typeDefs } from './resolvers';
import { INITIAL_DATA } from './initial-data';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers,
  typeDefs
});

client.writeData({
  data: INITIAL_DATA
});

export default client;
