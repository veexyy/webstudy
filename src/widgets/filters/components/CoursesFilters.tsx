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
    window.location.reload();
  };
  return (
    <div className="border border-white max-w-[325px] rounded-xl p-3 pr-16 font-montserrat">
      <div onClick={handleRemove} className="cursor-pointer">
        Сбросить фильтры
      </div>
      <ByDifficultFilter />
      <ByDirectionFilter />
      <ByTimeFilter />
    </div>
  );
}
