const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'sgql.herokuapp.com';

const scheme = proto => {
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  'http'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  'ws'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const authClientId = 'yMH6K69d6449J0vWmethvuxjHMxbd0DO';

export const authDomain = 'dev-0fz3g1hp.auth0.com';

export const callbackUrl = 'http://localhost:3000/callback';

