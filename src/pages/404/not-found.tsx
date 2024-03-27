import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-16 text-white relative z-[1] h-screen">
      <Helmet>
        <title>WebStudy | 404 не найдено</title>
      </Helmet>
      <h1 className="font-akony text-7xl lg:text-8xl">404</h1>
      <h2 className="text-2xl font-montserrat font-bold">
        Страница не найдена
      </h2>
      <h3 className="text-xl font-montserrat font-bold">
        <Link to="/">Вернуться на главную</Link>
      </h3>
    </div>
  );
}
