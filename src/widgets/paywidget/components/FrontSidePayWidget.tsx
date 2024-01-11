import { borderDesign } from "../../../components/shared/consts";
import { frontSidePayWidgetParagraph } from "../../../components/shared/consts";
export function FrontSidePayWidget({ open, setOpen }: any) {
  return (
    <div className="text-white sm:py-8 sm:px-10 px-3">
      <div className={borderDesign + "sm:pt-10 pt-5 pl-5 pr-16"}>
        <div
          className={
            borderDesign + "flex flex-col gap-[11px] p-3 font-montserrat"
          }
        >
          <span className="line-through font-bold">
            <span className="text-[#02C6F6] duration-500 translate-x-3">
              9999
            </span>
            рублей
          </span>
          <span className="sm:text-3xl text-xl font-bold">
            <span className="text-[#02C6F6]">6500</span> рублей
          </span>
          <span className="text-[12px] font-montserrat font-light">
            Можно в рассрочку
          </span>
        </div>
        <ul className="list-disc sm:pt-12 pt-6 sm:pb-16 pb-8 sm:px-8 px-4 font-montserrat font-thin text-xs sm:text-base">
          {frontSidePayWidgetParagraph.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setOpen(!open)}
          className={
            borderDesign +
            "sm:px-16 px-8 py-2 font-montserrat font-bold mt-10 sm:mt-20 mb-8 sm:mb-16 w-fit hover:border-orange-500 duration-500"
          }
        >
          Перейти к оплате
        </button>
      </div>
    </div>
  );
}
