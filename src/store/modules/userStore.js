import { login } from "@/api/user";
import jwtDecode from "jwt-decode";

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    userInfo: null,
    isValidToken: false,
  },
  getters: {},
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo;
    },
    SET_IS_VALID_TOKEN: (state, isValidToken) => {
      state.isValidToken = isValidToken;
    }
  },
  actions: {
    async userConfirm({ commit }, user) {
      await login(
        user,
        (res) => { 
          if (res.status === 200) {
            let accessToken = res.data["access-token"];
            let refreshToken = res.data["refresh-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_VALID_TOKEN", true);
            commit("SET_USER_INFO", user);
            localStorage.setItem("access-token", accessToken);
            localStorage.setItem("refresh-token", refreshToken);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_VALID_TOKEN", false);
          }
        },
        (err) => { console.log(err); })
    }
  },
}

export default userStore;