import { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/shared/store/hooks/redux-hooks";
import {
  getData,
  setDurationFilter,
} from "../../../components/shared/store/filterSlice";
import { Radio } from "@mui/material";

export default function MobileFiltersTime() {
  const [active, setActive] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.courseFilters.data);
  const dataDuration = new Set();
  data.map(({ fullCourseDuration }: any) =>
    dataDuration.add(fullCourseDuration)
  );
  const [checked, setChecked] = useState("any");
  const durationList: { key: number; value: string }[] = [
    { key: 3, value: "3 месяца" },
    { key: 6, value: "6 месяцев" },
    { key: 9, value: "9 месяцев" },
    { key: 12, value: "12 месяцев" },
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value);
    dispatch(setDurationFilter(e.target.value));
  };
  const anyCategory = () => {
    setChecked("any");
    dispatch(setDurationFilter("any"));
  };

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <div
        className="flex justify-between text-white"
        onClick={() => setActive(!active)}
      >
        <li>Длительность</li>
        <MdKeyboardArrowDown
          className={
            active ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }
        />
      </div>
      {active && (
        <div>
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
                checked={checked === "any"}
                onChange={anyCategory}
              />
              Любая
            </div>
            {durationList.map(({ value, key }) => (
              <div className="text-white flex gap-3 items-center" key={key}>
                <Radio
                  size="small"
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": {
                      color: "#fff",
                    },
                  }}
                  value={value}
                  checked={checked === value}
                  onChange={handleChange}
                />
                {value}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
