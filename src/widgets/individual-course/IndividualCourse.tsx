import { useState, useEffect } from "react";
import CourseButton from "./components/CourseButton";
import CourseDate from "./components/CourseDate";
import CourseImage from "./components/CourseImage";
import CourseSubtitle from "./components/CourseSubtitle";
import CourseTitle from "./components/CourseTitle";
import { AxiosResponse } from "axios";
import { useMatch } from "react-router-dom";
import axiosApiInterceptor from "../../api";
export function IndividualCourse() {
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
        `${db}/courses.json?auth=${
          JSON.parse(localStorage.getItem("tokens")!).idToken
        }`
      );
      if (res.data[paramsId]) {
        setTitle(res.data[paramsId].title);
        setDescription(res.data[paramsId].subtitle);
        setPhoto(res.data[paramsId].url);
        setTime(res.data[paramsId].fullCourseDuration);
        setId(res.data[paramsId].id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCourse();
  }, [id]);
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-[870px] gap-10 items-center border border-white rounded-lg p-4 relative z-[1]">
        <CourseImage className="h-full w-[300px]" src={photo}></CourseImage>
        <div className="flex flex-col gap-8">
          <CourseTitle>{title}</CourseTitle>
          <CourseSubtitle>{description}</CourseSubtitle>
          <div className="flex justify-between items-center">
            <CourseDate>{time}</CourseDate>
            <CourseButton></CourseButton>
          </div>
        </div>
      </div>
    </>
  );
}
