import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import { setThemeFilter } from "../../../components/shared/store/filterSlice";
import { Checkbox } from "@mui/material";
import { red } from "@mui/material/colors";
import { FilterSkeletonCheckbox } from "../../../components/shared/skeletons/skeletons";
export default function ByThemeFilter() {
  const db = getDatabase();
  const themes: any = [
    { theme: "java", value: "Java" },
    { theme: "python", value: "Python" },
    { theme: "semantic_of_programming_languages", value: "Семантика" },
  ];
  const dataSet = new Set<string>();
  const [data, setData] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      themes.map((theme: any) =>
        onValue(ref(db, `webinars/webinars_${theme.theme}`), (snapshot) => {
          snapshot.forEach((childSnapshot: any) => {
            dataSet.add(childSnapshot.val().category);
            setData([...dataSet]);
          });
        })
      );
    } catch (error) {
      return alert("Что-то пошло не так. Перезагрузите страницу.");
    }
  }, []);

  const handleCheckboxChange = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };
  useEffect(() => {
    dispatch(setThemeFilter(selectedValues));
  }, [selectedValues]);

  return (
    <>
      <div className="text-white">Тема</div>

      {data.length > 0
        ? themes.map(({ theme, value }: any, i: any) => (
            <React.Fragment key={i}>
              {data.map(
                (item) =>
                  item === theme && (
                    <div className="flex gap-3 items-center" key={i}>
                      <Checkbox
                        size="small"
                        sx={{
                          color: "white",
                          "&.Mui-checked": {
                            color: red[500],
                          },
                        }}
                        value={value}
                        checked={selectedValues.includes(theme)}
                        onChange={() => handleCheckboxChange(theme)}
                        lang="ru"
                      />
                      <div className="text-white">{value}</div>
                    </div>
                  )
              )}
            </React.Fragment>
          ))
        : new Array(3).fill(0).map((_, i) => (
            <div className="flex flex-col gap-2 w-full">
              <FilterSkeletonCheckbox key={i} />
            </div>
          ))}
    </>
  );
}
