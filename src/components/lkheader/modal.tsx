import ModalLinks from "./modalLinks";
export default function Modal({ showModal }: any) {
  return (
    <dialog open={showModal ? true : false} className="right-0 relative w-full">
      <ul
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
