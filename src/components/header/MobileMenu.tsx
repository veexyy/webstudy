import { Link, useNavigate } from "react-router-dom";
import { Dispatch } from "../shared/types";
import Cross from "./Cross";
import { headerLinks } from "../shared/consts";
export function MobileMenu({ open, setOpen }: Dispatch) {
  const token = localStorage.getItem("tokens");
  const nav = useNavigate();
  const handleExit = () => {
    localStorage.clear();
    setOpen(!open);
    nav("/login");
  };

  return (
    <div data-testid="mobile-menu">
      <Cross open={open} setOpen={setOpen} />
      <div className="lg:invisible visible duration-1000 fixed bg-black min-h-screen w-full top-0 left-0 text-white text-center flex justify-center font-bold items-center font-montserrat gap-[10px] z-50">
        <ul className="flex flex-col gap-[10px]">
          {headerLinks.map(({ link, name }, i) => (
            <li
              onClick={() => setOpen(false)}
              key={i}
              className="hover:underline underline-offset-4 duration-500"
            >
              <Link to={link}>{name}</Link>
            </li>
          ))}
          <Link to={"/account"}>
            <li
              className="cursor-pointer hover:underline underline-offset-4"
              onClick={() => setOpen(false)}
            >
              Профиль
            </li>
          </Link>
          {token ? (
            <li
              onClick={() => handleExit()}
              className="cursor-pointer hover:underline underline-offset-4"
            >
              Выйти
            </li>
          ) : (
            <Link to={"/login"} onClick={() => setOpen(!open)}>
              <li>Войти</li>
            </Link>
          )}
        </ul>
        Cross
      </div>
    </div>
  );
}
