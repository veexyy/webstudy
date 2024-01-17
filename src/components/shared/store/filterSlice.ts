import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../../widgets/filters/components/CoursesFilters";
import axiosApiInterceptor from "../../../api";
import { AxiosResponse } from "axios";

export const getData = createAsyncThunk("data/getData", async () => {
  try {
    const res: AxiosResponse = await axiosApiInterceptor.get(
      `${db}/courses.json`
    );
    return await res.data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  directionFilter: "any",
  durationFilter: "any",
  difficultyFilter: "any",
  speakersFilter: "",
  themeFilter: "",
  data: [],
  error: null,
  status: "",
  isLoading: true,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setDirectionFilter(state, action) {
      state.directionFilter = action.payload;
    },
    setDurationFilter(state, action) {
      state.durationFilter = action.payload;
    },
    setDifficultyFilter(state, action) {
      state.difficultyFilter = action.payload;
    },
    setFetchedData(state, action) {
      state.data = action.payload.data;
    },
    setSpeakersFilter(state, action) {
      state.speakersFilter = action.payload;
    },
    setThemeFilter(state, action) {
      state.themeFilter = action.payload;
    },
    removeDirectionFilter(state) {
      state.directionFilter = "any";
    },
    removeDurationFilter(state) {
      state.durationFilter = "any";
    },
    removeDifficultyFilter(state) {
      state.difficultyFilter = "any";
    },
    removeFilters(state) {
      state.difficultyFilter = "any";
      state.directionFilter = "any";
      state.durationFilter = "any";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.data = [];
        state.status = "loading";
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "resolved";
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getData.rejected, (state) => {
        state.data = [];
        state.status = "rejected";
        state.isLoading = false;
      });
  },
});

export const {
  setDirectionFilter,
  setDurationFilter,
  setDifficultyFilter,
  setSpeakersFilter,
  setThemeFilter,
  removeFilters,
  setFetchedData,
} = filterSlice.actions;

export default filterSlice.reducer;
