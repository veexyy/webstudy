import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import RatingsSubtitle from "./components/RatingsSubtitle";
import RatingsTitle from "./components/RatingsTitle";
import axios from "axios";
import { useState, useEffect } from "react";
import { ReviewsSkeleton } from "../../components/shared/skeletons/skeletons";
export default function Ratings() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [pic, setPic] = useState("");
  const [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  };
  useEffect(() => {
    getRatings(id);
  }, [id]);
  const nextReviewHandler = () => {
    if (id === 4) {
    } else {
      getRatings(id + 1);
      setIsLoading(true);
    }
  };
  const prevReviewHandler = () => {
    if (id === 0) {
    } else {
      getRatings(id - 1);
      setIsLoading(true);
    }
  };
  return (
    <>
      <div className="flex flex-col gap-10 max-w-[1100px] mx-auto">
        <div className="flex justify-between lg:min-w-[900px]">
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
              onClick={prevReviewHandler}
            ></IoIosArrowDropleft>
            <IoIosArrowDropright
              className={
                id === 4
                  ? "fill-gray-500 cursor-default w-8 sm:w-16 h-8 sm:h-16"
                  : " fill-white w-8 sm:w-16 h-8 sm:h-16 cursor-pointer"
              }
              onClick={nextReviewHandler}
            ></IoIosArrowDropright>
          </div>
        </div>

        <div className="flex flex-col border border-white max-w-[1100px] mx-auto rounded-xl p-5 gap-6">
          {isLoading ? (
            <div className="flex flex-col sm:flex-row w-[200px] sm:w-[400px] md:w-[600px] justify-center lg:w-full">
              <ReviewsSkeleton />
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </>
  );
}
