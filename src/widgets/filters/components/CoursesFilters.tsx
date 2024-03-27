import { removeFilters } from "../../../components/shared/store/filterSlice";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import ByDifficultFilter from "./ByDifficultFilter";
import ByDirectionFilter from "./ByDirectionFilter";
import ByTimeFilter from "./ByTimeFilter";
export const db = import.meta.env.VITE_FIREBASE_DATABASE_URL;
export default function CoursesFilters() {
  const dispatch = useAppDispatch();
  const handleRemove = () => {
    dispatch(removeFilters());
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col border max-w-[315px] border-white rounded-xl p-4 font-montserrat">
      <ByDifficultFilter />
      <ByDirectionFilter />
      <ByTimeFilter />
      <button
        onClick={handleRemove}
        className="cursor-pointer border border-1 py-2 px-5 mt-3 rounded-xl max-w-full hover:text-blue-300 duration-500"
      >
        Сбросить фильтры
      </button>
    </div>
  );
}
