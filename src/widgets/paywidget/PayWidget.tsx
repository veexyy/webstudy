import { FrontSidePayWidget } from "./components/FrontSidePayWidget";
import { BackSidePayWidget } from "./components/BackSidePayWidget";
import PayButton from "./components/PayButton";
import { PropsWithChildren } from "react";
import { useState } from "react";
export function PayWidget({ children }: PropsWithChildren) {
  const [isFlipped, setisFlipped] = useState(false);
  return (
    <div className="border border-white rounded-xl text-white">
      {!isFlipped ? <FrontSidePayWidget /> : <BackSidePayWidget />}
      <PayButton open={isFlipped} setOpen={setisFlipped}>
        {children}
      </PayButton>
    </div>
  );
}
