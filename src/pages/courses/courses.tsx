import { Link } from "react-router-dom";
import Filters from "../../widgets/filters/Filters";
import Card from "./components/card";
import { useEffect } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../components/shared/store/hooks/redux-hooks";
import { getData } from "../../components/shared/store/filterSlice";
import { pickCourse } from "../../components/shared/store/courseSlice";
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
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const data = useAppSelector((state) => state.courseFilters.data);
  const difficultyFilter = useAppSelector(
    (state) => state.courseFilters.difficultyFilter
  );
  const durationFilter = useAppSelector(
    (state) => state.courseFilters.durationFilter
  );
  const directionFilter = useAppSelector(
    (state) => state.courseFilters.directionFilter
  );
  const filteredData = data.filter((course: Course) => {
    if (
      (difficultyFilter === "any" || +difficultyFilter === course.difficult) &&
      (durationFilter === "any" ||
        durationFilter === course.fullCourseDuration) &&
      (directionFilter === "any" || directionFilter === course.category)
    ) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <>
      <div className="text-white relative z-[1] my-3 flex ">
        <div className="w-1/3">
          <Filters />
        </div>
        <div className="grid grid-cols-3 h-full gap-y-5 gap-x-10 w-2/3">
          {filteredData.map(
            ({
              id,
              title,
              category,
              image,
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
                    })
                  )
                }
                to={`/courses/${id}`}
                key={id}
              >
                <Card
                  id={id}
                  title={title}
                  category={category}
                  image={image}
                  fullCourseDuration={fullCourseDuration}
                />
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
