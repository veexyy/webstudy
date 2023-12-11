import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="text-white relative z-[1]">
      <ul>
        <li>
          <Link to="/courses/1">первый курс</Link>
        </li>
        <li>
          <Link to="/courses/2">второй курс</Link>
        </li>
        <li>
          <Link to="/courses/3">третий курс</Link>
        </li>
      </ul>
    </div>
  );
}
