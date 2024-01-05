import { SlMagnifier } from "react-icons/sl";

export default function Coursesinput({ search, setSearch }: any) {
  return (
    <>
      <div className="relative">
        <>
          <SlMagnifier className="absolute fill-white top-3 left-2 scale-[1, -1]" />
          <input
            value={search}
            type="text"
            name="courses-search"
            className="bg-transparent border border-white rounded-xl font-montserrat py-2 pl-8 pr-32 text-white focus:outline-none"
            placeholder="Поиск по курсам"
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      </div>
    </>
  );
}
