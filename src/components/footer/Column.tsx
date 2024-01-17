import { Link } from "react-router-dom";
import { ColumnDataType } from "./FooterLinks";
import { useAppDispatch } from "../shared/store/hooks/redux-hooks";
import { setDirectionFilter } from "../shared/store/filterSlice";

export function Column({ title, links }: ColumnDataType) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        className="text-[#9BFF37] font-sans font-bold text-stroke-sm stroke-1 mb-[32px] text-shadow-sm text-3xl shadow-white relative z-10"
        style={{ WebkitTextStroke: "1px black" }}
      >
        {title}
      </div>
      <ul className="flex flex-col gap-2 items-center md:items-start">
        {links.map(({ link, name, category }, i) => (
          <li
            className="font-bold font-montserrat hover:underline underline-offset-4"
            key={i}
          >
            <Link
              onClick={() =>
                category ? dispatch(setDirectionFilter(category)) : null
              }
              to={link}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
