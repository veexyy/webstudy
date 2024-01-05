import { useNavigate } from "react-router-dom";
import { IndividualCourse } from "../../widgets/individual-course/IndividualCourse";
import {
  getData,
  removeFilters,
} from "../../components/shared/store/filterSlice";
import { useEffect } from "react";
import { getDatabase, ref, set } from "firebase/database";

import {
  useAppDispatch,
  useAppSelector,
} from "../../components/shared/store/hooks/redux-hooks";
import { getUser } from "../../components/shared/store/userSlice";
export default function Course() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const handlerExit = () => {
    nav("/courses");
    dispatch(removeFilters());
  };
  const pickedCourse: any = useAppSelector((state) => state.pickedCourse);
  const localId = localStorage.getItem("localId");
  const database = getDatabase();

  const writeUserData = () => {
    try {
      const dbRef = ref(
        database,
        `users/${localId}/courses/course_${pickedCourse.pickedCourseId}`
      );
      set(dbRef, {
        id: `${pickedCourse.pickedCourseId}`,
        title: `${pickedCourse.pickedCourseTitle}`,
        category: `${pickedCourse.pickedCourseCategory}`,
        fullCourseDuration: `${pickedCourse.pickedCourseDuration}`,
        difficult: `${pickedCourse.pickedCourseDifficult}`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <div
        className="text-white cursor-pointer font-montserrat"
        onClick={handlerExit}
      >
        &#8592; Вернуться назад
      </div>
      <IndividualCourse writeUserData={writeUserData} />
    </>
  );
}
