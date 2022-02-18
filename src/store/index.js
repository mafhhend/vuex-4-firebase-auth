import { createStore } from "vuex";
import { auth } from "../firebase/config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
  state: {
    user: null,
    authIsReady: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed : ", state.user);
    },
    setAuthIsReady(state, payload) {
      state.authIsReady = payload;
    },
  },
  actions: {
    async signup(context, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could'ot complete signUP");
      }
    },
    async login(context, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        context.commit("setUser", res.user);
      } else {
        throw new Error("could'ot complete Login");
      }
    },

    async logout(context) {
      await signOut(auth);

      context.commit("setUser", null);
    },
  },
});

// every refresh this tries to connect to DB and check is logged in or not :
const unsub=onAuthStateChanged(auth, (user) => {
  store.commit('setAuthIsReady',true);
  store.commit('setUser',user );
  unsub();
});

export default store;
