import { borderDesign } from "../../../components/shared/consts";
import { useState } from "react";
type PayButtonType = {
  isValid: boolean;
};
export default function PayButton({ isValid }: PayButtonType) {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    setShowMessage(true);
  };
  return (
    <>
      {showMessage && (
        <p className="absolute text-blue-600 font-montserrat text-xs -top-3 sm:top-0">
          Мы отправили вам заявку!
        </p>
      )}
      <button
        disabled={!isValid}
        type="submit"
        value="Оплатить"
        onClick={handleClick}
        className={
          isValid
            ? borderDesign +
              "px-16 py-2 font-montserrat font-bold mb-8 mt-3 sm:my-8 sm:w-fit hover:border-orange-500 duration-500 text-xs sm:text-base"
            : borderDesign +
              "px-16 py-2 font-montserrat font-bold mb-8 mt-3 sm:my-8 sm:w-fit duration-500 text-xs sm:text-base " +
              "border border-gray-400 text-gray-600  duration-500"
        }
      >
        Оплатить
      </button>
    </>
  );
}
