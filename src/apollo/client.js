import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache({
    typePolicies: {
      AttributeSet: {
        keyFields: ['id', 'items'],
      },
    },
  }),
});

export default client;
