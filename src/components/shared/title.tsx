import { useLocation } from "react-router-dom";

export default function Title() {
  const location = useLocation();
  return (
    <h1 className="text-white font-akony text-xl sm:text-3xl text-center my-4">
      {location.pathname === "/courses" ? "Все курсы" : "Все вебинары"}
    </h1>
  );
}
