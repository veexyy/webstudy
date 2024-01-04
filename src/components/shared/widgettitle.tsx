import { PropsWithChildren } from "react";

export default function WidgetTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="text-white text-center font-montserrat text-2xl font-bold my-4 lg:my-[40px]">
      {children}
    </h1>
  );
}
