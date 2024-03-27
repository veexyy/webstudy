import { useEffect, useState } from "react";
import {
  setDurationFilter,
  getData,
} from "../../../components/shared/store/filterSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../components/shared/store/hooks/redux-hooks";
import { Radio, RadioGroup } from "@mui/material";
import { blue } from "@mui/material/colors";
export default function ByDirectionFilter() {
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
      <div className="font-montserrat font-bold my-2">Длительность</div>
      <div className="flex flex-col text-white">
        <RadioGroup name="time-filters">
          <div>
            <Radio
              value="any"
              size="small"
              checked={checked === "any"}
              onChange={anyCategory}
              sx={{
                color: "white",
                paddingLeft: "0",
                "&.Mui-checked": {
                  color: blue[900],
                  paddingLeft: "0",
                  "& .MuiTouchRipple-root": {
                    left: "-8px",
                  },
                },
              }}
            />
            Любая
          </div>
          {durationList.map(({ key, value }) => (
            <div key={key} className="text-white flex items-center">
              <Radio
                size="small"
                value={value}
                checked={checked === value}
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
              {value}
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
}
