import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosApiInterceptor from "../../../api";
import { AxiosResponse } from "axios";
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
export const getUser = createAsyncThunk("user/getUser", async () => {
  const token = localStorage.getItem("tokens");
  if (token) {
    try {
      const res: AxiosResponse = await axiosApiInterceptor.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`,
        {
          idToken: `${JSON.parse(localStorage.getItem("tokens")!).idToken}`,
        }
      );
      localStorage.setItem("localId", res.data.users[0].localId);
      return localStorage.getItem("localId");
    } catch (error) {
      return alert("Перезагрузите страницу");
    }
  } else {
    return null;
  }
});

const initialState = {
  localId: null as string | void | null,
  error: null as boolean | null,
  status: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.localId = action.payload;
      state.status = "fulfilled";
      state.error = null;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.error = true;
      state.status = "rejected";
    });
    builder.addCase(getUser.pending, (state) => {
      state.localId = "";
      state.status = "loading";
    });
  },
  reducers: {
    setUser(state, action) {
      state.localId = action.payload.localId;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
