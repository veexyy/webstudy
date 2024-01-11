import { Course } from "../courses";

export default function Card({ title, fullCourseDuration, image }: Course) {
  return (
    <>
      <ul className="text-white font-montserrat relative border border-white p-3 rounded-xl flex justify-between items-center h-[100px]">
        <li>
          <img
            className="absolute left-0 bottom-0 w-[80px] rounded-xl"
            src={image}
            alt="card"
          />
        </li>
        <div
          className="flex flex-col relative w-2/3 truncate text-nowrap lg:text-wrap"
          lang="ru"
        >
          <li>{title}</li>
          <li>{fullCourseDuration}</li>
        </div>
      </ul>
    </>
  );
}
