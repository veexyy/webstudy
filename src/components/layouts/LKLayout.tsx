import { LKHeader } from "../lkheader/LKHeader";
import { Outlet } from "react-router-dom";

export function LKLayout() {
  return (
    <>
      <LKHeader />
      <div className="relative z-[1] max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] mx-auto">
        <Outlet />
      </div>
    </>
  );
}
