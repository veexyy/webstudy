import { PropsWithChildren } from "react";

export default function RatingsTitle({ children }: PropsWithChildren) {
  return (
    <div className="text-white font-montserrat font-bold text-xl sm:text-3xl mb-5">
      {children}
    </div>
  );
}
