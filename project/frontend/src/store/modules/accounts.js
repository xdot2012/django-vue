// imported in index.js for vuex store
import axios from "axios";

const state = {
  users: []
};

const getters = {
  allUsers: state => state.users //Get all todos from the state
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await axios.get("/api/users_list/");

    commit("setUsers", response.data); //Call the Mutation
  },
  async addUser({ commit }, user) {
    console.log(user.name);
    console.log(user.email);
    const response = await axios.post("/api/users_list/", {
      username: user.name,
      email: user.email
    });
    commit("newUser", response.data); //Call the Mutation
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users), //Change the State of todos
  newUser: (state, user) => state.users.unshift(user) //Change the State of todos
};

export default {
  state,
  getters,
  actions,
  mutations
};
