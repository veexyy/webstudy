import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export default function ExampleComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response: AxiosResponse) => {
        setData(response.data.slice(0, 5));
      });
  }, []);

  return (
    <ul className="text-white list-disc pb-3 px-10 font-montserrat ">
      {data.map(({ id, title }) => (
        <li className="mt-2" key={id}>
          {title}
        </li>
      ))}
    </ul>
  );
}
