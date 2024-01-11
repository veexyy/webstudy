import { Suspense } from "react";
import { LKHeader } from "../lkheader/LKHeader";
import { Outlet } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
export default function LKLayout() {
  return (
    <>
      <div className="max-w-[1548px] mx-auto">
        <LKHeader />
      </div>
      <div className="relative max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] h-full mx-auto">
        <Suspense
          fallback={
            <div className="flex flex-col justify-center items-center min-h-screen">
              <TailSpin height={100} width={300} color="white" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
