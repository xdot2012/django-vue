import Vuex from "vuex";
import Vue from "vue";
import accounts from "./modules/accounts";

// Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    accounts
  }
});
