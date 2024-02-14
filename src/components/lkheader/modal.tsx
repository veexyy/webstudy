import { useRef } from "react";
import ModalLinks from "./modalLinks";
import { useClickOutside } from "../shared/store/hooks/useClickOutside";
export default function Modal({ showModal, setShowModal }: any) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    setShowModal(false);
  });
  return (
    <dialog
      data-testid="modal"
      ref={modalRef}
      open={showModal ? true : false}
      className="right-0 relative w-full"
    >
      <ul
        onClick={() => setShowModal(false)}
        className={
          showModal
            ? "visible flex flex-col font-montserrat z-[100] text-white max-w-[300px] duration-500 bg-[#212121] gap-2 p-3 pr-20 rounded-xl drop-shadow-2xl md:invisible lg:visible absolute right-7"
            : "invisible duration-500"
        }
      >
        <ModalLinks />
      </ul>
    </dialog>
  );
}
