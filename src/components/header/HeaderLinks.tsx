import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";
import { headerLinks } from "../shared/consts";

export default function HeaderLinks({}: PropsWithChildren) {
  return (
    <>
      <ul className="hidden text-white lg:flex flex-row gap-[78px] font-montserrat font-bold">
        {headerLinks.map(({ link, name }, i) => (
          <li key={i} className="hover:underline underline-offset-4">
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
