import { create } from "zustand";

import authenticationAPI from "../api/authenticationAPI.js";
import { setAuthHeader } from "../utils/helper.js";

const useUserStore = create((set) => ({
  user: null,

  signInAction: async (data) => {
    try {
      const response = await authenticationAPI.signIn(data.email, data.password);

      const { user, token } = response;

      set({ user }); // Update user state in store

      localStorage.setItem("token", token);
      setAuthHeader(token);
    } catch (error) {
      console.error('Error during sign-in:', error);
      throw error;
    }
  },

  signUpAction: async (data) => {
    try {
      const response = await authenticationAPI.signUp(data.email, data.password, data.userName);

      const { user, token } = response;

      set({ user }); // Update user state in store

      localStorage.setItem("token", token);
      setAuthHeader(token);
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw error;
    }
  },

  signOutAction: () => {
    set({ user: null });

    localStorage.removeItem("token");
    setAuthHeader(null);
  },

  setUserAction: (user) => set({ user }),
}));

export { useUserStore };