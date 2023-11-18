import { PropsWithChildren } from "react";
import BackSidePayWidgetInfo from "./BackSidePayWidgetInfo";
import PayForm from "./PayForm";
import LoginThroughVK from "./LoginThroughVK";

export function BackSidePayWidget({ children }: PropsWithChildren) {
  return (
    <div className="text-white relative">
      <div className="flex sm:gap-10 items-center flex-col sm:flex-row">
        <BackSidePayWidgetInfo>{children}</BackSidePayWidgetInfo>
      </div>
      <div className="font-montserrat font-bold my-2 sm:my-6 text-center">
        Заполните контактные данные
      </div>
      <LoginThroughVK />
      <PayForm />
    </div>
  );
}
