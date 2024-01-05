import { getDatabase, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../components/shared/store/hooks/redux-hooks";
import { setThemeFilter } from "../../../components/shared/store/filterSlice";

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
      console.log(error);
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
      {themes.map(({ theme, value }: any, i: any) => (
        <React.Fragment key={i}>
          {data.map(
            (item) =>
              item === theme && (
                <div className="flex gap-3 items-center" key={i}>
                  <input
                    type="checkbox"
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
      ))}
    </>
  );
}