import { getDatabase, onValue, ref } from "firebase/database";
import Filters from "../../widgets/filters/Filters";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "../../components/shared/store/hooks/redux-hooks";

export default function Webinars() {
  const db = getDatabase();
  const themes: any = [
    { theme: "java", value: "Java" },
    { theme: "python", value: "Python" },
    { theme: "semantic_of_programming_languages", value: "Семантика" },
  ];

  const [data, setData] = useState<string[]>([]);
  const memoizedData = useMemo(() => data, [data]);
  const [filteredData, setFilteredData] = useState(memoizedData);

  useEffect(() => {
    try {
      themes.map((theme: any) =>
        onValue(ref(db, `webinars/webinars_${theme.theme}`), (snapshot) => {
          snapshot.forEach((childSnapshot: any) => {
            setData((prev) => [...prev, childSnapshot.val()]);
          });
        })
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  const themeFilter: any = useAppSelector(
    (state) => state.courseFilters.themeFilter
  );
  const speakersFilter = useAppSelector(
    (state) => state.courseFilters.speakersFilter
  );
  useEffect(() => {
    setFilteredData(
      memoizedData.filter((item: any) => {
        if (
          (themeFilter.length === 0 || themeFilter.includes(item.category)) &&
          (speakersFilter.length === 0 || speakersFilter.includes(item.speaker))
        ) {
          return true;
        }
        return false;
      })
    );
  }, [themeFilter, speakersFilter, memoizedData]);

  return (
    <div className="flex gap-16">
      <div className="text-white relative z-[1] w-1/3">
        <Filters />
      </div>

      <div className="w-2/3 text-white relative z-[1] grid grid-cols-3 gap-3 ">
        {filteredData.map(({ title, link }: any, i: any) => (
          <div
            className="border border-white rounded-xl p-1 text-center"
            key={i}
          >
            <iframe
              className="aspect-video rounded-xl p-1 w-full"
              src={link}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}
