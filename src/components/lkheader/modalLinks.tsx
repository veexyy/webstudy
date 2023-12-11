import { Link as LinkType } from "../shared/types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeAuth } from "../shared/store/authSlice";
export default function ModalLinks() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleExit = () => {
    localStorage.removeItem("tokens");
    navigate("/login");
    dispatch(removeAuth());
  };
  const links: LinkType[] = [
    { name: "О нас", link: "/about" },
    { name: "Вебинары", link: "/webinars" },
    { name: "Курсы", link: "/courses" },
  ];
  return (
    <>
      {links.map(({ link, name }, i) => (
        <li
          className="cursor-pointer hover:underline"
          onClick={() => navigate(link)}
          key={i}
        >
          <Link to={link}>{name}</Link>
        </li>
      ))}
      <li
        className="cursor-pointer  hover:underline"
        onClick={() => handleExit()}
      >
        Выход
      </li>
    </>
  );
}
