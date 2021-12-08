import { createStore } from "vuex";
import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    SET_USERS(state, data) {
      state.users = data;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const result = await http.get("/users");
      commit("SET_USERS", result.data);
    },
  },
  modules: {},
});
