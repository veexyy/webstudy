import { useState, useEffect } from "react";
import { choosePaymentType } from "../../../components/shared/consts";

export default function BackSidePayWidgetInfo({}: object) {
  const [chosen, setChosen] = useState(null);
  const choosePaymentTypeStyle =
    "border cursor-pointer py-3 sm:p-6 rounded-lg font-bold font-montserrat hover:border-orange-500 duration-500 mb-5 text-center sm:w-[275px] text-xs sm:text-base w-[200px] ";
  const handleChoose = (index: any) => {
    setChosen(index);
  };
  useEffect(() => {
    handleChoose(0);
  }, []);
  return (
    <>
      {choosePaymentType.map((title, index) => (
        <div
          key={index}
          className={
            chosen === index
              ? "border-orange-500 " + choosePaymentTypeStyle
              : "border-white " + choosePaymentTypeStyle
          }
          onClick={() => handleChoose(index)}
        >
          <div>{title}</div>
        </div>
      ))}
    </>
  );
}
