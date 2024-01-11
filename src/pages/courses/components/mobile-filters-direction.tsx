import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/shared/store/hooks/redux-hooks";
import {
  getData,
  setDirectionFilter,
} from "../../../components/shared/store/filterSlice";
import { Radio } from "@mui/material";
interface CategoryItem {
  [key: string]: string;
}
export default function MobileFiltersDirection() {
  const [active, setActive] = useState<boolean>(false);
  const dataCategories: Set<string> = new Set();
  const [checked, setChecked] = useState<string>("any");
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
      <div
        className="flex justify-between text-white"
        onClick={() => setActive(!active)}
      >
        <li>Направления</li>
        <MdKeyboardArrowDown
          className={
            active ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }
        />
      </div>
      {active && (
        <>
          <div className="flex flex-col gap-1 text-white">
            <div className="flex items-center gap-3">
              <Radio
                size="small"
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
                value="any"
                checked={checked === "any"}
                onChange={anyCategory}
              />
              Любое
            </div>
            {sortedCategories.map((item: string, i: number) => (
              <div className="text-white flex gap-3 items-center" key={i}>
                <Radio
                  size="small"
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  value={item}
                  checked={checked === item}
                  onChange={handleChange}
                />
                {categoriesList[item]}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
