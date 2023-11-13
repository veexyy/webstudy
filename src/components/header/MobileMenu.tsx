import { Link } from "react-router-dom";
import { Dispatch } from "../shared/types";
import Cross from "./Cross";
import { headerLinks } from "../shared/consts";

export function MobileMenu({ open, setOpen }: Dispatch) {
  return (
    <>
      <Cross open={open} setOpen={setOpen} />
      <div className="lg:invisible visible duration-1000 absolute bg-black h-full w-full top-0 left-0 text-white text-center flex justify-center font-bold items-center font-montserrat gap-[10px]">
        <ul className="flex flex-col gap-[10px]">
          {headerLinks.map(({ link, name }, i) => (
            <li
              key={i}
              className="hover:underline underline-offset-4 duration-500"
            >
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
