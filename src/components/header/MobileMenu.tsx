import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "../shared/types";
import Cross from "./Cross";
import { headerLinks } from "../shared/consts";

export function MobileMenu({ open, setOpen }: Dispatch) {
  const token = localStorage.getItem("tokens");
  {
    token ? headerLinks.splice(2, 1) : null;
  }
  const nav = useNavigate();
  const handleExit = () => {
    localStorage.removeItem("tokens");
    setOpen(!open);
    nav("/login");
  };
  return (
    <>
      <Cross open={open} setOpen={setOpen} />
      <div className="lg:invisible visible duration-1000 absolute bg-black min-h-[100vh] w-full top-0 left-0 text-white text-center flex justify-center font-bold items-center font-montserrat gap-[10px] z-50">
        <ul className="flex flex-col gap-[10px]">
          {headerLinks.map(({ link, name }, i) => (
            <li
              onClick={() => setOpen(!open)}
              key={i}
              className="hover:underline underline-offset-4 duration-500"
            >
              <Link to={link}>{name}</Link>
            </li>
          ))}
          {token ? (
            <li onClick={() => handleExit()} className="cursor-pointer">
              Выйти
            </li>
          ) : (
            <Link to={"/login"} onClick={() => setOpen(!open)}>
              <li>Войти</li>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
