import { Link } from "react-router-dom";
import WidgetTitle from "../../../components/shared/widgettitle";
import Card from "../../courses/components/card";

export default function Professions() {
  const data = [
    {
      title: "Веб-разработчик",
      fullCourseDuration: "6 месяцев",
      id: "1",
      image:
        "https://firebasestorage.googleapis.com/v0/b/webstudy-1b851.appspot.com/o/photos%2F1.png?alt=media&token=892c5e7e-7608-47fb-9b81-9d44e4654df7",
      link: "/courses/1",
    },
    {
      title: "Cloud Engineer",
      fullCourseDuration: "6 месяцев",
      id: "2",
      image:
        "https://firebasestorage.googleapis.com/v0/b/webstudy-1b851.appspot.com/o/photos%2F2.png?alt=media&token=6a5e7e9a-9d7f-4f2c-9b9d-8b8d8f8d8f8d",
      link: "/courses/13",
    },
    {
      title: "Системный аналитик",
      fullCourseDuration: "6 месяцев",
      id: "3",
      image:
        "https://firebasestorage.googleapis.com/v0/b/webstudy-1b851.appspot.com/o/photos%2F4.png?alt=media&token=633e8807-add1-479b-bb7f-09e6dffc5dd7",
      link: "courses/45",
    },
  ];

  return (
    <>
      <div className="border border-white shadow shadow-[#42FF00] max-w-[1100px] mx-auto my-24 flex flex-col justify-center items-center rounded-md px-3">
        <WidgetTitle>Востребованные профессии</WidgetTitle>
        <span className="text-white font-montserrat text-center text-base lg:text-xl mb-8 lg:mb-16">
          Не останетесь без работы даже через 20 лет
        </span>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-10 mb-10">
          {data.map((item) => (
            <div key={item.id} className="bg-black rounded-xl w-[310px]">
              <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                <Card
                  image={item.image}
                  title={item.title}
                  fullCourseDuration={item.fullCourseDuration}
                  id={item.id}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
