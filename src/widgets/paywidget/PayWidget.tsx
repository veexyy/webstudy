import { FrontSidePayWidget } from "./components/FrontSidePayWidget";
import { BackSidePayWidget } from "./components/BackSidePayWidget";
import { PropsWithChildren } from "react";
import { useState } from "react";
import { Title } from "./components/Title";

export function PayWidget({ children }: PropsWithChildren) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <div className="border border-white rounded-3xl text-white max-w-[700px] sm:mx-auto flex flex-col items-center relative sm:h-[812px] ">
        <button
          onClick={() => setIsFlipped(!isFlipped)}
          className={
            isFlipped
              ? "absolute left-3 top-3 sm:top-5 sm:left-5 font-montserrat text-[12px] hover:underline underline-offset-4 duration-500"
              : "hidden"
          }
        >
          &#8592; Вернуться назад
        </button>
        <Title open={isFlipped} setOpen={setIsFlipped}>
          {children}
        </Title>
        {!isFlipped ? (
          <FrontSidePayWidget open={isFlipped} setOpen={setIsFlipped} />
        ) : (
          <BackSidePayWidget />
        )}
      </div>
    </>
  );
}
