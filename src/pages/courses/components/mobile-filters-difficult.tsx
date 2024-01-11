import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import {
  getData,
  setDifficultyFilter,
} from "../../../components/shared/store/filterSlice";
import { Radio } from "@mui/material";

export default function MobileFiltersDifficult() {
  const [active, setActive] = useState<boolean>(false);
  const [checked, setChecked] = useState<string>("any");
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.value);
    dispatch(setDifficultyFilter(e.target.value));
  };
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  const difficultyList: { key: number; value: string }[] = [
    { key: 2, value: "Легкий" },
    { key: 3, value: "Средний" },
    { key: 4, value: "Сложный" },
  ];
  const anyCategory = () => {
    setChecked("any");
    dispatch(setDifficultyFilter("any"));
  };
  return (
    <>
      <div
        className="flex justify-between text-white"
        onClick={() => setActive(!active)}
      >
        <li>Сложность</li>
        <MdKeyboardArrowDown
          className={
            active ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }
        />
      </div>
      {active && (
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
            Любой
          </div>
          {difficultyList.map(({ value, key }) => (
            <div className="text-white flex gap-3 items-center" key={key}>
              <Radio
                size="small"
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#fff",
                  },
                }}
                value={key}
                checked={checked === key.toString()}
                onChange={handleChange}
              />
              {value}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
