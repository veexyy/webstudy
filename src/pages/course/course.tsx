import { useNavigate } from "react-router-dom";
import { IndividualCourse } from "../../widgets/individual-course/IndividualCourse";
import { useDispatch } from "react-redux";
import { removeFilters } from "../../components/shared/store/filterSlice";

export default function Course() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const handlerExit = () => {
    nav("/courses");
    dispatch(removeFilters());
  };
  return (
    <>
      <div
        className="text-white relative z-[1] cursor-pointer font-montserrat"
        onClick={handlerExit}
      >
        &#8592; Вернуться назад
      </div>
      <IndividualCourse />
    </>
  );
}
