import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pickedCourseId: "",
  pickedCourseTitle: "",
  pickedCourseDuration: "",
  pickedCourseDifficult: "",
  pickedCourseCategory: "",
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    pickCourse: (state, action) => {
      state.pickedCourseId = action.payload.id;
      state.pickedCourseCategory = action.payload.category;
      state.pickedCourseDuration = action.payload.fullCourseDuration;
      state.pickedCourseDifficult = action.payload.difficult;
      state.pickedCourseTitle = action.payload.title;
    },
  },
});
{
}

export const { pickCourse } = courseSlice.actions;
export default courseSlice.reducer;
