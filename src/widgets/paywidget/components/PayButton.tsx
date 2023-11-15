import { Link } from "react-router-dom";
import { Dispatch } from "../../../components/shared/types";

export default function PayButton({ open, setOpen }: Dispatch) {
  return (
    <>
      <button onClick={() => setOpen(!open)}>
        {!open ? "Перейти к оплате" : <Link to="/pay">Оплатить</Link>}
      </button>
    </>
  );
}
