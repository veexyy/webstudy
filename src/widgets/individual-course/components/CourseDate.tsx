import { PropsWithChildren } from "react";

export default function CourseDate({ children }: PropsWithChildren) {
  return (
    <div className="text-white font-montserrat font-bold text-xl md:text-2xl">
      {children}
    </div>
  );
}
