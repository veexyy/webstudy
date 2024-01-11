import BySpeakersFilters from "./BySpeakersFilters";
import ByThemeFilter from "./ByThemeFilter";

export default function WebinarsFilters() {
  return (
    <div className="border border-white text-white rounded-xl font-montserrat p-3 ">
      <h1 className="font-montserrat font-bold text-2xl mb-3">Фильтры</h1>
      <ByThemeFilter />
      <BySpeakersFilters />
    </div>
  );
}
