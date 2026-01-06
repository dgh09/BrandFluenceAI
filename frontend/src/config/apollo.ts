import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Custom fetch function to attach JWT tokens
const customFetch = (uri: RequestInfo | URL, options: RequestInit = {}) => {
  const token = localStorage.getItem('authToken');

  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  });
};

// Apollo Client instance
export const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT || 'http://localhost:3000/graphql',
    fetch: customFetch,
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});
