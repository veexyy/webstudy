import { Logo } from "./shared/Logo";
import { FooterLinks } from "./FooterLinks";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1548px] mx-auto">
        <div className="lg:w-1/5">
          <Logo />
        </div>
        <ul className="text-white flex flex-col lg:flex-row gap-5 items-center md:items-start lg:gap-[126px] justify-center md:justify-start lg:justify-end lg:w-4/5 md:grid grid-cols-2 md:gap-x-20 lg:flex">
          <FooterLinks />
        </ul>
      </div>
    </footer>
  );
}
