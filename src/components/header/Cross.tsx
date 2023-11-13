import { Dispatch } from "../shared/types";

export default function Cross({ open, setOpen }: Dispatch) {
  return (
    <div
      className="absolute z-10 text-white right-4 top-0 justify-self-end text-5xl cursor-pointer overflow-hidden"
      onClick={() => setOpen(!open)}
      id="cross"
    >
      &times;
    </div>
  );
}
