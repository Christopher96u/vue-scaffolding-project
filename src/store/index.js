import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import { apollo } from "@/plugins/vue-apollo";
import gql from "graphql-tag";
Vue.use(Vuex);
import designplatform from './design-platform/design-platform'
export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    users: {}
  },
  mutations: {
    setUsers: (state,payload)=>{
      state.users = payload
    }
  },
  actions: {
    async getUsers({commit}){
      const { data: {users: {data}} } = await apollo.query({
        query: gql(`query{
                            users{
                                data{
                                  name
                                    }
                                 }
                              }
                          `)
      })
      console.log(data);
      commit('setUsers',data);

    }
  },
  modules: {
    designplatform
  },
});
