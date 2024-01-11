import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { TailSpin } from "react-loader-spinner";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="relative z-[1] max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] mx-auto">
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
      <Footer />
    </>
  );
}
