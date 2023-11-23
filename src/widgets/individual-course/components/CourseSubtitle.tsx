import { PropsWithChildren } from "react";

export default function CourseSubtitle({ children }: PropsWithChildren) {
  return (
    <div className="text-white font-montserrat font-medium text-xl md:text-2xl max-w-[550px]">
      {children}
    </div>
  );
}
