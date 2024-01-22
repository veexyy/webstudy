import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
const CourseButton = lazy(() => import("./components/CourseButton"));
const CourseDate = lazy(() => import("./components/CourseDate"));
const CourseImage = lazy(() => import("./components/CourseImage"));
const CourseSubtitle = lazy(() => import("./components/CourseSubtitle"));
const CourseTitle = lazy(() => import("./components/CourseTitle"));
import { AxiosResponse } from "axios";
import { useMatch } from "react-router-dom";
import axiosApiInterceptor from "../../api";
import { Rings } from "react-loader-spinner";
export function IndividualCourse(writeUserData: any) {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState(0);
  const [time, setTime] = useState("");
  const match = useMatch("/courses/:id");
  const paramsId = Number(match?.params.id) - 1;
  const db = import.meta.env.VITE_FIREBASE_DATABASE_URL;
  const getCourse = async (): Promise<void> => {
    try {
      const res: AxiosResponse = await axiosApiInterceptor.get(
        `${db}/courses.json`
      );
      if (res.data[paramsId]) {
        setTitle(res.data[paramsId].title);
        setDescription(res.data[paramsId].subtitle);
        setPhoto(res.data[paramsId].picture);
        setTime(res.data[paramsId].fullCourseDuration);
        setId(res.data[paramsId].id);
      }
    } catch (error) {
      return alert("Что-то пошло не так. Перезагрузите страницу.");
    }
  };
  useEffect(() => {
    getCourse();
  }, [id]);
  return (
    <>
      <div className="flex flex-col md:flex-row w-full max-w-[1024px] lg:max-w-[1100px] bg-black justify-between gap-10 items-center border border-white rounded-lg p-4 md:p-8 relative">
        <Suspense fallback={<Rings color="white" height={80} width={80} />}>
          <CourseImage
            className="w-[100px] sm:w-[150px] lg:w-[200px] max-h-[250px]"
            src={photo}
          />
          <div className="flex flex-col gap-3 md:gap-8 md:w-2/3">
            <CourseTitle>{title}</CourseTitle>
            <CourseSubtitle>{description}</CourseSubtitle>
            <div className="flex justify-between items-center gap-3">
              <CourseDate>{time}</CourseDate>
              <CourseButton writeUserData={writeUserData}></CourseButton>
            </div>
          </div>
        </Suspense>
      </div>
    </>
  );
}
