import Vue from 'vue';// Remove if you won't use : this.$apollo...
import VueApollo from 'vue-apollo';//Remove if you won't use : this.$apollo...
import {createApolloClient} from "vue-cli-plugin-apollo/graphql-client";
import store from '@/store' // vuex for getting token from localStorage
import {HttpLink} from "apollo-link-http";
Vue.use(VueApollo);// Remove if you won't use : this.$apollo...
let uri = '';
if (process.env.NODE_ENV === 'production') {
  uri = 'https://mlhsg2r28b.execute-api.us-east-1.amazonaws.com/prod/graphql';
  // dev admin
} else {
  // uri = 'https://7i8f3nxi4e.execute-api.us-east-1.amazonaws.com/dev/graphql';
  uri = 'http://127.0.0.1:3002/graphql';
  // uri = 'http://127.0.0.1:3000/prod/graphql';
}
const enchancedFetch = (url, init) => {
  const token = store.getters.token ? store.getters.token: localStorage.getItem('token');
  return fetch(url, {
    ...init,//request
    headers: {
      ...init.headers,
      ...(token && { 'token': `Bearer ${token}` }),
    },
  }).then(response => response)
}
let httpLink = new HttpLink({
  //This url is just for example!
  uri: 'https://graphqlzero.almansi.me/api',
  fetchOptions: {
    mode: 'cors',
  },
  fetch: enchancedFetch,
})
const defaultOptions = {
  link: httpLink,
  defaultHttpLink: false,
  persisting: false,
  inMemoryCacheOptions: {
    addTypename: false,
    resultCaching: false,
  },
};
const { apolloClient } = createApolloClient({
  ...defaultOptions,
});
export const apollo = apolloClient;
export function createProvider() {
  // This function( createProvider() ) could be removed if you DON'T wanna use this.$apollo in any component
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
    },
    errorHandler(error) {
      console.log("%cError", "background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;", error.message);
    }
  });
}
