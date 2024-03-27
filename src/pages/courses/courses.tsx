import { Link } from "react-router-dom";
import Filters from "../../widgets/filters/Filters";
import { lazy } from "react";
const Card = lazy(() => import("./components/card"));
import { useEffect, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../components/shared/store/hooks/redux-hooks";
import { getData } from "../../components/shared/store/filterSlice";
import { pickCourse } from "../../components/shared/store/courseSlice";
import Title from "../../components/shared/title";
import Coursesinput from "../../components/shared/coursesinput";
import { CourseSkeleton } from "../../components/shared/skeletons/skeletons";
import { LuSettings2 } from "react-icons/lu";
import MobileFilters from "./components/mobile-filters";
import { Helmet } from "react-helmet";
export interface Course {
  id: string;
  title?: string;
  category?: string;
  image?: string;
  fullCourseDuration?: string;
  difficult?: number | string;
}
export default function Courses() {
  const dispatch = useAppDispatch();
  const [visibleItems, setVisibleItems] = useState(9);
  const [open, setOpen] = useState<boolean>(false);
  const [searchCourses, setSearchCourses] = useState<string>("");
  const data: Course[] = useAppSelector((state) => state.courseFilters.data);
  const isLoading = useAppSelector((state) => state.courseFilters.isLoading);
  const difficultyFilter = useAppSelector(
    (state) => state.courseFilters.difficultyFilter
  );
  const durationFilter = useAppSelector(
    (state) => state.courseFilters.durationFilter
  );
  const directionFilter = useAppSelector(
    (state) => state.courseFilters.directionFilter
  );
  const filteredCourses: Course[] = data.filter((course: Course) => {
    return (
      course
        .title!.toLocaleLowerCase()
        .includes(searchCourses.toLocaleLowerCase()) &&
      (difficultyFilter === "any" || +difficultyFilter === course.difficult) &&
      (durationFilter === "any" ||
        durationFilter === course.fullCourseDuration) &&
      (directionFilter === "any" || directionFilter === course.category)
    );
  });
  const filteredData: Course[] = filteredCourses.slice(0, visibleItems);
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>WebStudy | Курсы</title>
      </Helmet>
      <MobileFilters setOpen={setOpen} open={open} />
      <Title />
      <div className="grid grid-cols-1 lg:block">
        <div className="flex gap-3 items-center">
          <div className="my-3 w-full lg:my-12 flex justify-center lg:block lg:px-0">
            <Coursesinput search={searchCourses} setSearch={setSearchCourses} />
          </div>
          <button
            className="text-white font-montserrat font-bold lg:hidden border border-white p-2 rounded-xl"
            onClick={() => setOpen(true)}
          >
            <LuSettings2 size={25} />
          </button>
        </div>
        <div className="text-white py-3 flex gap-5">
          <div className="lg:w-1/3 hidden lg:block">
            <Filters />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full gap-y-5 md:gap-x-10 w-full lg:w-2/3">
            {!isLoading
              ? filteredData.map(
                  ({
                    id,
                    title,
                    category,
                    picture,
                    fullCourseDuration,
                    difficult,
                  }: any) => (
                    <Link
                      onClick={() =>
                        dispatch(
                          pickCourse({
                            id,
                            title,
                            category,
                            fullCourseDuration,
                            difficult,
                            picture,
                          })
                        ) && window.scrollTo(0, 0)
                      }
                      to={`/courses/${id}`}
                      key={id}
                    >
                      <Card
                        id={id}
                        fullCourseDuration={fullCourseDuration}
                        image={picture}
                        title={title}
                        category={category}
                        key={id}
                      />
                    </Link>
                  )
                )
              : [...new Array(15)].map((_, index) => (
                  <CourseSkeleton key={index} />
                ))}
            {filteredCourses.length === 0 ? (
              <div>Ничего не найдено.</div>
            ) : filteredData.length % 9 === 0 ? (
              <button
                className="text-white font-montserrat hover:text-blue-300 duration-500 font-bold border border-white px-8 py-2 rounded-xl justify-self-center col-span-1 md:col-span-2 xl:col-span-3"
                onClick={() => setVisibleItems(visibleItems + 9)}
              >
                Показать еще
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
