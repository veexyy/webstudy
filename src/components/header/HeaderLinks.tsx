import { Link, useNavigate } from "react-router-dom";
import { PropsWithChildren } from "react";
import { headerLinks } from "../shared/consts";
import { useAppDispatch } from "../shared/store/hooks/redux-hooks";
import { removeAuth } from "../shared/store/authSlice";
export default function HeaderLinks({}: PropsWithChildren) {
  const token = localStorage.getItem("tokens");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleExit = () => {
    localStorage.removeItem("tokens");
    navigate("/login");
    dispatch(removeAuth());
  };
  return (
    <>
      <ul className="hidden text-white lg:flex flex-row gap-[78px] font-montserrat font-bold">
        {headerLinks.map(({ link, name }, i) => (
          <li key={i} className="hover:underline underline-offset-4">
            <Link to={link}>{name}</Link>
          </li>
        ))}
        {token ? (
          <li className="cursor-pointer" onClick={() => handleExit()}>
            Выйти
          </li>
        ) : (
          <Link to={"/login"}>
            <li>Войти</li>
          </Link>
        )}
      </ul>
    </>
  );
}
