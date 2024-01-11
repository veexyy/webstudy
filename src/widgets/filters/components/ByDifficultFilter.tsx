import { Radio, RadioGroup } from "@mui/material";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import {
  getData,
  setDifficultyFilter,
} from "../../../components/shared/store/filterSlice";
import { useEffect, useState } from "react";
import { blue } from "@mui/material/colors";

export default function ByDifficultFilter(): JSX.Element {
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
      <div className="font-montserrat font-bold my-2">Уровень сложности</div>
      <RadioGroup
        name="difficult-filters"
        sx={{ color: "white", "&.Mui-checked": { color: "white" } }}
        className="flex flex-col text-white"
      >
        <div className="flex items-center">
          <Radio
            value="any"
            size="small"
            checked={checked === "any"}
            sx={{ color: "white", "&.Mui-checked": { color: blue[900] } }}
            onChange={anyCategory}
          />
          Любой
        </div>
        {difficultyList.map(({ value, key }) => (
          <div className="text-white" key={key}>
            <Radio
              size="small"
              value={key}
              checked={checked === key.toString()}
              onChange={handleChange}
              sx={{ color: "white", "&.Mui-checked": { color: blue[900] } }}
            />
            {value}
          </div>
        ))}
      </RadioGroup>
    </>
  );
}
