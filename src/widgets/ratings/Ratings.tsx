import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import RatingsSubtitle from "./components/RatingsSubtitle";
import RatingsTitle from "./components/RatingsTitle";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Ratings() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [pic, setPic] = useState("");
  const [id, setId] = useState(0);
  const getRatings = async (id: number): Promise<void> => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const picRes = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    setTitle(response.data[id].title);
    setSubtitle(response.data[id].body);
    setPic(picRes.data[id].url);
    setId(id);
  };
  useEffect(() => {
    getRatings(id);
  }, [id]);

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex justify-between lg:min-w-[900px] lg:mx-auto">
          <div className="text-white font-bold text-lg sm:text-3xl font-montserrat p-2">
            Программирование
            <br /> по силам каждому
          </div>
          <div className="flex gap-2 sm:gap-10 items-center">
            <IoIosArrowDropleft
              className={
                id === 0
                  ? "fill-gray-500 cursor-default w-8 sm:w-16 h-8 sm:h-16"
                  : "fill-white w-8 sm:w-16 h-8 sm:h-16 cursor-pointer"
              }
              onClick={id === 0 ? () => {} : () => getRatings(id - 1)}
            ></IoIosArrowDropleft>
            <IoIosArrowDropright
              className={
                id === 4
                  ? "fill-gray-500 cursor-default w-8 sm:w-16 h-8 sm:h-16"
                  : " fill-white w-8 sm:w-16 h-8 sm:h-16 cursor-pointer"
              }
              onClick={id === 4 ? () => {} : () => getRatings(id + 1)}
            ></IoIosArrowDropright>
          </div>
        </div>
        <div className="flex flex-col border border-white max-w-[900px] mx-auto rounded-xl p-5 gap-6">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch sm:justify-between gap-3">
            <div>
              <img
                className="w-[200px] sm:max-w-[300px] sm:min-w-[200px] rounded-xl"
                src={pic}
              />
            </div>
            <div className="px-3 break-all">
              <RatingsTitle>{title}</RatingsTitle>
              <RatingsSubtitle>{subtitle}</RatingsSubtitle>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
