import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "../shared/Logo";
import HeaderLinks from "./HeaderLinks";
import { PropsWithChildren } from "react";
import { HamburgerMenu } from "../shared/hamburgermenu";
export function Header({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <header>
      <div className="flex bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[30px] h-fit max-w-[1650px] mx-auto relative z-10">
        <Logo />
        <HamburgerMenu open={open} setOpen={setOpen} />
        {open && <MobileMenu open={open} setOpen={setOpen} />}
        <HeaderLinks>{children}</HeaderLinks>
      </div>
    </header>
  );
}
