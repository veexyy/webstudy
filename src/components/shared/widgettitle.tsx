import { PropsWithChildren } from "react";

export default function WidgetTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="text-white text-center font-montserrat text-2xl font-bold my-6">
      {children}
    </h1>
  );
}
