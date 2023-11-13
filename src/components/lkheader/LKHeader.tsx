import { Link } from "react-router-dom";
import { Logo } from "../shared/Logo";
import { HamburgerMenu } from "../shared/hamburgermenu";
import { useState } from "react";
import { MobileMenu } from "../header/MobileMenu";

export function LKHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1548px] mx-auto">
        <Logo />
        <HamburgerMenu open={open} setOpen={setOpen} />
        {open && <MobileMenu open={open} setOpen={setOpen} />}
        <div className="hidden items-center gap-10 lg:flex">
          <Link to="/">
            <span className="text-white font-bold font-montserrat hover:underline underline-offset-4 text-[20px]">
              Главная
            </span>
          </Link>
          <img
            src="https://randomuser.me/api/portraits/men/20.jpg"
            className="rounded-full w-10 border border-white"
            alt="Avatar"
          />
        </div>
      </div>
    </>
  );
}
