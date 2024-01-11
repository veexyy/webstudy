import { Logo } from "../shared/Logo";
import { FooterLinks } from "./FooterLinks";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="flex flex-col lg:flex-row bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1548px] mx-auto relative py-10 z-[1]">
        <div className="lg:w-1/5">
          <Logo className="-ml-10 py-2" />
        </div>
        <ul
          className={styles.footerlinks}
          onClick={() => window.scrollTo(0, 0)}
        >
          <FooterLinks />
        </ul>
      </div>
    </footer>
  );
}
