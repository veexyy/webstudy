import Card from "../courses/components/card";
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch } from "../../components/shared/store/hooks/redux-hooks";
import { removeFilters } from "../../components/shared/store/filterSlice";
import { useNavigate } from "react-router-dom";
import CourseAccordion from "./components/accordion";

export default function CourseInfo() {
  const dispatch = useAppDispatch();
  const handlerExit = () => {
    nav("/account");
    dispatch(removeFilters());
  };
  const nav = useNavigate();
  const db = getDatabase();
  const [courseData, setCourseData] = useState<any[]>([]);
  const id = localStorage.getItem("localId");
  const courseId = localStorage.getItem("pickedCourse");
  useEffect(() => {
    onValue(ref(db, `users/${id}/courses`), (snapshot) => {
      if (snapshot.exists()) {
        try {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            if (childData.id === courseId) {
              setCourseData([childData]);
            }
          });
        } catch (error) {
          return alert("Данные не получены. Перезагрузите страницу.");
        }
      }
    });
  }, [courseId]);

  return (
    <>
      <div
        className="text-white cursor-pointer font-montserrat max-w-full flex mb-4"
        onClick={handlerExit}
      >
        ← Вернуться назад
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-16">
        <div className="text-white flex flex-col lg:w-1/3 h-1/2">
          {courseData.length > 0 && courseId && (
            <>
              {courseData.map(
                ({ title, fullCourseDuration, id, picture }, i) => (
                  <Card
                    key={i}
                    title={title}
                    fullCourseDuration={fullCourseDuration}
                    id={id}
                    image={picture}
                  />
                )
              )}
            </>
          )}
        </div>
        <div data-testid="accordion" className="lg:w-2/3">
          <CourseAccordion />
        </div>
      </div>
    </>
  );
}
