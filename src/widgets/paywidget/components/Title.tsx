import { Dispatch } from "../../../components/shared/types";
export function Title({ open }: Dispatch) {
  return (
    <h1 className="font-montserrat font-bold sm:text-3xl text-2xl text-center sm:p-[50px] p-[30px]">
      {!open ? "Стоимость курса" : "Оплата"}
    </h1>
  );
}
