import { Dispatch } from "./types";
export function HamburgerMenu({ open, setOpen }: Dispatch) {
  return (
    <div
      data-testid="hamburger-menu"
      onClick={() => setOpen(!open)}
      className={`lg:hidden flex flex-col gap-1 ${
        open ? "" : "cursor-pointer"
      }`}
    >
      <div className="border-white w-6 border-2"></div>
      <div className="border-white w-6 border-2"></div>
      <div className="border-white w-6 border-2"></div>
    </div>
  );
}
