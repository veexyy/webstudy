import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="relative z-[1] max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
