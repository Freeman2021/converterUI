import Vue from "vue";
import App from "./app";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import { getTokenFromStorage } from "@/utils";

Vue.config.productionTip = false;

axios.defaults.headers.common["token"] = getTokenFromStorage();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
