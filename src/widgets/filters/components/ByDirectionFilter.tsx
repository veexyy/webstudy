import { useEffect, useState } from "react";
import {
  getData,
  setDirectionFilter,
} from "../../../components/shared/store/filterSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/shared/store/hooks/redux-hooks";
import { Radio, RadioGroup } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FilterSkeleton } from "../../../components/shared/skeletons/skeletons";
import { blue } from "@mui/material/colors";
interface CategoryItem {
  [key: string]: string;
}
export default function ByDirectionFilter(): JSX.Element {
  const dataCategories: Set<string> = new Set();
  const [checked, setChecked] = useState<string>("any");
  const [showAll, setShowAll] = useState<boolean>(false);
  const data = useAppSelector((state) => state.courseFilters.data);
  data.map(({ category }: { category: string }) =>
    dataCategories.add(category)
  );
  const sortedCategories: string[] = Array.from(dataCategories);
  const categoriesList: CategoryItem = {
    any: "Любая",
    dev: "Разработка",
    design: "Дизайн",
    ai: "Искусственный интеллект",
    admin: "Администрирование",
    net: "Сети",
    analytics: "Аналитика",
    devops: "DevOps",
    cs: "Кибербезопасность",
    test: "Тестирование",
    cloud: "Облачные сервисы",
    pm: "Управление проектами",
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.value);
    dispatch(setDirectionFilter(e.target.value));
  };
  const isLoading = useAppSelector((state) => state.courseFilters.isLoading);
  const visibleCategories = showAll
    ? sortedCategories
    : sortedCategories.slice(0, 3);
  const anyCategory = () => {
    setChecked("any");
    dispatch(setDirectionFilter("any"));
  };
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <div className="font-montserrat font-bold my-2">Направления</div>
      <div className="flex flex-col text-white ">
        <RadioGroup name="time-filters">
          <div className="text-white flex items-center">
            <Radio
              size="small"
              value="any"
              checked={checked === "any"}
              onChange={anyCategory}
              sx={{
                color: "white",
                paddingLeft: "0",
                "&.Mui-checked": {
                  color: blue[900],
                  "& .MuiTouchRipple-root": {
                    left: "-8px",
                  },
                },
              }}
            />
            Любое
          </div>
          {isLoading ? (
            <FilterSkeleton />
          ) : (
            visibleCategories.map((item: string, i: number) => (
              <div key={i} className="text-white flex items-center">
                <Radio
                  size="small"
                  value={item}
                  checked={checked === item}
                  onChange={handleChange}
                  sx={{
                    color: "white",
                    paddingLeft: "0",
                    "&.Mui-checked": {
                      color: blue[900],
                      "& .MuiTouchRipple-root": {
                        left: "-8px",
                      },
                    },
                  }}
                />
                {categoriesList[item]}
              </div>
            ))
          )}
        </RadioGroup>
        <button
          className="font-montserrat font-bold text-white flex items-center "
          onClick={() => setShowAll(!showAll)}
        >
          {!showAll
            ? `Еще ${sortedCategories.length - 3} направлений`
            : "Скрыть"}
          <MdKeyboardArrowDown
            className={showAll ? "rotate-180" : ""}
            size={24}
          />
        </button>
      </div>
    </>
  );
}
