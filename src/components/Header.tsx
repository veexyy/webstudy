import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import Logo from "./shared/Logo";
const headerLinks = [
  { name: "О нас", link: "/about" },
  { name: "Вебинары", link: "/webinars" },
  { name: "Войти", link: "/login" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <header>
      <div className="flex bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1650px] mx-auto">
        <Logo />
        <div
          onClick={() => setOpen(!open)}
          className={`lg:hidden flex flex-col gap-1 ${
            open ? "" : "cursor-pointer"
          }`}
        >
          <div className="border-white w-6 border-2"></div>
          <div className="border-white w-6 border-2"></div>
          <div className="border-white w-6 border-2"></div>L
        </div>

        {open && <MobileMenu open={open} setOpen={setOpen} />}
        <ul className="hidden text-white lg:flex flex-row gap-[78px] font-montserrat font-bold">
          {headerLinks.map(({ link, name }, i) => (
            <li key={i} className="hover:underline underline-offset-4">
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
