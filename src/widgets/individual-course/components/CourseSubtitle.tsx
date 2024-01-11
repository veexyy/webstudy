import { PropsWithChildren } from "react";

export default function CourseSubtitle({ children }: PropsWithChildren) {
  return (
    <div className="text-white font-montserrat font-medium text-base sm:text-2xl">
      {children}
    </div>
  );
}
