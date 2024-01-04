import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div className="relative z-[1] max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}
