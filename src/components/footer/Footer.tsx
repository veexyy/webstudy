import { Logo } from "../shared/Logo";
import { FooterLinks } from "./FooterLinks";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1548px] mx-auto relative pb-10 z-[1]">
        <div className="lg:w-1/5">
          <Logo />
        </div>
        <ul className={styles.footerlinks}>
          <FooterLinks />
        </ul>
      </div>
    </footer>
  );
}
