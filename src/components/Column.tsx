import { Link } from "react-router-dom";
import { ColumnDataType } from "./FooterLinks";

export function Column({ title, links }: ColumnDataType) {
  return (
    <div>
      <div
        className="text-[#9BFF37] font-sans font-bold text-stroke-sm stroke-1 mb-[32px] text-shadow-sm text-3xl shadow-white"
        style={{ WebkitTextStroke: "1px black" }}
      >
        {title}
      </div>
      <ul className="flex flex-col gap-2 items-center md:items-start">
        {links.map(({ link, name }, i) => (
          <li
            className="font-bold font-montserrat hover:underline underline-offset-4"
            key={i}
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
