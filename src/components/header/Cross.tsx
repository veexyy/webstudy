import { Dispatch } from "../shared/types";

export default function Cross({ open, setOpen }: Dispatch) {
  return (
    <div
      className="fixed z-[60] text-white right-3 top-1 text-5xl cursor-pointer "
      onClick={() => setOpen(!open)}
      id="cross"
    >
      &times;
    </div>
  );
}
