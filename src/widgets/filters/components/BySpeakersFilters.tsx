import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import { setSpeakersFilter } from "../../../components/shared/store/filterSlice";
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";

export default function BySpeakersFilters() {
  const db = getDatabase();
  const dataSet = new Set<string>();
  const [data, setData] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const themes: any = [
    { theme: "java", value: "Java" },
    { theme: "python", value: "Python" },
    { theme: "semantic_of_programming_languages", value: "Семантика" },
  ];
  useEffect(() => {
    try {
      themes.map((theme: any) =>
        onValue(ref(db, `webinars/webinars_${theme.theme}`), (snapshot) => {
          snapshot.forEach((childSnapshot: any) => {
            dataSet.add(childSnapshot.val().speaker);
            setData([...dataSet]);
          });
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  const dispatch = useAppDispatch();
  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  useEffect(() => {
    dispatch(setSpeakersFilter(selectedValues));
  }, [selectedValues]);

  return (
    <>
      <div className="text-white">Спикеры</div>
      {data.map((item: any, i: any) => (
        <div key={i} className="flex gap-3 items-center">
          <Checkbox
            size="small"
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: red[500],
              },
            }}
            value={item}
            key={i}
            onChange={() => handleCheckboxChange(item)}
            lang="ru"
            className="text-white"
          />
          {item}
        </div>
      ))}
    </>
  );
}
