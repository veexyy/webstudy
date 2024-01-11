import { useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import MobileFiltersDifficult from "./mobile-filters-difficult";
import MobileFiltersDirection from "./mobile-filters-direction";
import MobileFiltersTime from "./mobile-filters-time";

export default function MobileFilters({ open, setOpen }: any) {
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "scroll";
  }, [open]);
  return (
    <div
      className={
        open
          ? "lg:invisible visible duration-1000 absolute bg-black h-screen w-full -top-[73px] left-0 text-white p-3 font-montserrat flex flex-col z-50 overflow-y-auto"
          : "hidden"
      }
    >
      <RxCross1
        onClick={() => setOpen(!open)}
        size={24}
        className="cursor-pointer fixed top-3 right-3 text-white z-[60]"
      />
      <ul className={`flex flex-col gap-5 mt-12 `}>
        <h1 className="font-montserrat font-bold text-2xl">Фильтры</h1>
        <MobileFiltersDifficult />
        <MobileFiltersDirection />
        <MobileFiltersTime />
      </ul>
    </div>
  );
}
