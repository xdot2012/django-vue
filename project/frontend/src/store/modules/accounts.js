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
    const response = await axios.post("/api/users_list/", {
      username: user.name,
      email: user.email
    });
    commit("newUser", response.data); //Call the Mutation
  },
  async deleteUser({ commit }, userId) {
    await axios.delete(`/api/users_list/${userId}/`);
    commit("removeUser", userId);
  }
};

const mutations = {
  setUsers: (state, users) => (state.users = users), //Change the State of users
  newUser: (state, user) => state.users.unshift(user),
  removeUser: (state, userId) =>
    (state.users = state.users.filter(user => user.id !== userId))
};

export default {
  state,
  getters,
  actions,
  mutations
};
