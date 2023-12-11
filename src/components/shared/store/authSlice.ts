import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  id: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action) {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.idToken;
      localStorage.setItem("token", action.payload.idToken);
    },
    removeAuth(state) {
      state.email = null;
      state.id = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { removeAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;
