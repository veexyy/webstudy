import WidgetTitle from "../../../components/shared/widgettitle";
import Card from "../../courses/components/card";

export default function Professions() {
  const data = [
    {
      title: "Front-end разработчик",
      fullCourseDuration: "12 месяцев",
      id: "1",
    },
    {
      title: "Специалист по нейросетям",
      fullCourseDuration: "12 месяцев",
      id: "2",
    },
    {
      title: "Системный инженер",
      fullCourseDuration: "12 месяцев",
      id: "3",
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
            <div
              key={item.id}
              className="bg-black rounded-xl w-[250px] lg:w-[300px]"
            >
              <Card
                title={item.title}
                fullCourseDuration={item.fullCourseDuration}
                id={item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
