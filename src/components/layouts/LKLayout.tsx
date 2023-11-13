import { LKHeader } from "../lkheader/LKHeader";
import { Outlet } from "react-router-dom";

export function LKLayout() {
  return (
    <>
      <LKHeader />
      <Outlet />
    </>
  );
}
