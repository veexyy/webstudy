import { PropsWithChildren } from "react";

export default function RatingsSubtitle({ children }: PropsWithChildren) {
  return <div className="text-white font-montserrat text-xl">{children}</div>;
}
