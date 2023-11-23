import { useState, useEffect } from "react";
import CourseButton from "./components/CourseButton";
import CourseDate from "./components/CourseDate";
import CourseImage from "./components/CourseImage";
import CourseSubtitle from "./components/CourseSubtitle";
import CourseTitle from "./components/CourseTitle";
import axios, { AxiosResponse } from "axios";

export function IndividualCourse() {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  //пример запроса на сервер. потом поменяю, когда появится бэк
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/5")
      .then((response: AxiosResponse) => {
        const title = response.data.title;
        const subtitle = response.data.body;
        setDescription(subtitle);
        setTitle(title);
      })
      .catch((error: AxiosResponse) => {
        console.error(error);
      });
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response: AxiosResponse) => {
        const photo = response.data[10].url;
        setPhoto(photo);
      });
  });

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-[870px] gap-10 items-center border border-white rounded-lg p-4">
        <CourseImage className="h-full w-[300px]" src={photo}></CourseImage>
        <div className="flex flex-col gap-8">
          <CourseTitle>{title}</CourseTitle>
          <CourseSubtitle>{description}</CourseSubtitle>
          <div className="flex justify-between items-center">
            <CourseDate>12 месяцев</CourseDate>
            <CourseButton></CourseButton>
          </div>
        </div>
      </div>
    </>
  );
}
