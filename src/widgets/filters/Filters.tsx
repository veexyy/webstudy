import { useLocation } from "react-router-dom";
import CoursesFilters from "./components/CoursesFilters";
import WebinarsFilters from "./components/WebinarsFilters";

export default function Filters() {
  const location = useLocation();

  return location.pathname === "/courses" ? (
    <CoursesFilters />
  ) : (
    <WebinarsFilters />
  );
}
