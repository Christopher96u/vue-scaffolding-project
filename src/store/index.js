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
    users: {},
    currentStep: 1,
    memeezStepForm: [
      {
        title: "Images",
        step: 1
      },
      {
        title: "Skin",
        step: 2
      },
      {
        title: "Hair",
        step: 3
      },
      {
        title: "Eyes",
        step: 4
      },
      {
        title: "Additional Info",
        step: 5
      },
      {
        title: "Resume",
        step: 6
      },
      {
        title: "Addons",
        step: 7
      },
      {
        title: "Sounds",
        step: 8
      },
      {
        title: "Scents",
        step: 9
      },
      {
        title: "Add-Products",
        step: 10
      },
      {
        title: "Congrats",
        step: 11
      }
    ]
  },
  mutations: {
    setUsers: (state,payload)=>{
      state.users = payload
    },
    SET_STEP: (state, payload) =>{
      state.currentStep = payload
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

    },
    setStep : ({commit, state}, newValue) =>{
      commit('SET_STEP', newValue)
      return state.currentStep
    }
  },
  getters: {
    currentStep: state => state.currentStep,
    memeezStepForm: state => state.memeezStepForm,
    headers: state => state.headers
  },
  modules: {
    designplatform
  },
});
