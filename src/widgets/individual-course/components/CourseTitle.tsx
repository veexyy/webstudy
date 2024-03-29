import { PropsWithChildren } from "react";

export default function CourseTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="font-montserrat font-bold text-white text-xl sm:text-4xl">
      {children}
    </h1>
  );
}
