import { getDatabase, onValue, ref } from "firebase/database";
import { useAppDispatch } from "../../components/shared/store/hooks/redux-hooks";
import { useEffect, useState } from "react";
import { getUser } from "../../components/shared/store/userSlice";
import Card from "../courses/components/card";
import { Link } from "react-router-dom";
import { pickCourse } from "../../components/shared/store/courseSlice";
import { AppDispatch } from "../../components/shared/store/store";

export default function PersonalAccount() {
  const db = getDatabase();
  const dispatch: AppDispatch = useAppDispatch();
  const [hasData, setHasData] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const id = localStorage.getItem("localId");
  useEffect(() => {
    onValue(ref(db, `users/${id}/courses`), (snapshot) => {
      if (snapshot.exists() && hasData === false) {
        try {
          snapshot.forEach((childSnapshot) => {
            const childData = childSnapshot.val();
            setData((prev) => [...prev, childData]);
            setHasData(true);
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, [id]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const writeId = (id: string) => {
    dispatch(pickCourse({ id }));
    localStorage.setItem("pickedCourse", id);
  };

  return (
    <>
      <div className="text-white">
        {data.length === 0 ? (
          <div className="font-montserrat mobile:text-base text-sm text-center">
            Привет! Курсы можно выбрать в&nbsp;
            <Link
              className="underline text-sm text-center mobile:text-base"
              to={"/courses"}
            >
              каталоге
            </Link>
          </div>
        ) : (
          <div className="font-montserrat text-sm mobile:text-base text-center">
            Привет! Сейчас ты проходишь эти курсы:
          </div>
        )}
      </div>
      <div className="flex flex-col md:grid grid-cols-2 lg:grid-cols-3 md:gap-5 gap-2 mt-3">
        {data.map(({ title, id, fullCourseDuration, picture }, i) => (
          <Link
            to={`/account/course/${id}`}
            onClick={() => writeId(id)}
            key={i}
          >
            <Card
              title={title}
              id={id}
              fullCourseDuration={fullCourseDuration}
              image={picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
