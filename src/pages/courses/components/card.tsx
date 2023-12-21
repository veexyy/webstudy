import { Course } from "../courses";

export default function Card({ title, fullCourseDuration }: Course) {
  return (
    <>
      <ul className="text-white font-montserrat border border-white p-3 rounded-xl flex flex-col justify-center h-[100px]">
        <li>{title}</li>
        <li>{fullCourseDuration}</li>
      </ul>
    </>
  );
}
