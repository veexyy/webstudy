import { PropsWithChildren } from "react";

export default function AchievmentBlock({ children }: PropsWithChildren) {
  return (
    <div className="bg-black border border-white text-white w-[300px]  rounded-md text-center font-montserrat mobile:py-6 py-3 mobile:text-2xl text-xl">
      {children}
    </div>
  );
}
