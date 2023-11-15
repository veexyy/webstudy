import { borderDesign } from "../../../components/shared/consts";
import { Dispatch } from "../../../components/shared/types";

export default function PayButton({ open, setOpen }: Dispatch) {
  return (
    <>
      <button
        className={
          borderDesign +
          "px-16 py-2 font-montserrat font-bold mt-20 mb-16 w-fit "
        }
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          "Перейти к оплате"
        ) : (
          <a href="https://web.telegram.org/k/#@fuidhf">Оплатить</a>
        )}
      </button>
    </>
  );
}
