import BySpeakersFilters from "./BySpeakersFilters";
import ByThemeFilter from "./ByThemeFilter";

export default function WebinarsFilters() {
  return (
    <div className="border border-white text-white rounded-xl font-montserrat p-3">
      <ByThemeFilter />
      <BySpeakersFilters />
    </div>
  );
}
