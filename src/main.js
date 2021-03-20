import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import { createProvider } from '@/plugins/vue-apollo';
import Vuelidate from 'vuelidate'
import VueCookie from 'vue-cookies'

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(VueCookie);

new Vue({
  router,
  store,
  vuetify,
  apolloProvider: createProvider(),
  render: (h) => h(App),
}).$mount("#app");
