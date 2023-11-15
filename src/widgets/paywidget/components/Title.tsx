import { Dispatch } from "../../../components/shared/types";
export function Title({ open }: Dispatch) {
  return (
    <h1 className="font-montserrat font-bold text-3xl text-center p-[50px]">
      {!open ? "Стоимость курса" : "Оплата"}
    </h1>
  );
}
