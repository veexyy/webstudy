import { borderDesign } from "../../../components/shared/consts";
import { frontSidePayWidgetParagraph } from "../../../components/shared/consts";
export function FrontSidePayWidget() {
  return (
    //здесь данные подгрузятся с сервера
    <div className="text-white py-8 px-10">
      <div className={borderDesign + "pt-10 pl-5 pr-16"}>
        <div
          className={
            borderDesign + "flex flex-col gap-[11px] p-3 font-montserrat"
          }
        >
          <span className="line-through font-bold">
            <span className="text-[#02C6F6]">9999</span> рублей
          </span>
          <span className="text-3xl font-bold">
            <span className="text-[#02C6F6]">6500</span> рублей
          </span>
          <span className="text-[12px] font-montserrat font-light">
            Можно в рассрочку
          </span>
        </div>
        <ul className="list-disc pt-12 pb-16 px-8 font-montserrat font-thin text-">
          {frontSidePayWidgetParagraph.map((title) => (
            <li>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
