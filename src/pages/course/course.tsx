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
import WhatYouWillCan from "../../widgets/what-you-will-can/WhatYouWillCan";
import Ratings from "../../widgets/ratings/Ratings";
import { PayWidget } from "../../widgets/paywidget/PayWidget";
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
  const token = localStorage.getItem("tokens");

  const writeUserData = () => {
    if (token) {
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
          picture: `${pickedCourse.pickedCoursePicture}`,
        });
      } catch (error) {
        return alert("Что-то пошло не так. Перезагрузите страницу.");
      }
    } else {
      nav("/login");
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
      <div className="flex flex-col justify-center items-center py-12 gap-24">
        <IndividualCourse writeUserData={writeUserData} />
        <WhatYouWillCan />
        <div>
          <Ratings />
        </div>
        <div>
          <PayWidget />
        </div>
      </div>
    </>
  );
}
