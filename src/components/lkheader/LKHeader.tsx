import { Link } from "react-router-dom";
import { Logo } from "../shared/Logo";
import { HamburgerMenu } from "../shared/hamburgermenu";
import { useEffect, useState } from "react";
import { MobileMenu } from "../header/MobileMenu";
import Modal from "./modal";
import { getDatabase, onValue, ref } from "firebase/database";
import { TailSpin } from "react-loader-spinner";
export function LKHeader() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pic, setPic] = useState<any>("");
  const db = getDatabase();
  useEffect(() => {
    onValue(
      ref(db, `users/${localStorage.getItem("localId")}/data/picture`),
      (snapshot) => {
        setPic(snapshot.val());
        localStorage.setItem("avatar", snapshot.val());
      }
    );
  }, []);

  const picUrl =
    "https://firebasestorage.googleapis.com/v0/b/webstudy-1b851.appspot.com/o/photos%2Fpng-transparent-computer-icons-google-account-user-email-miscellaneous-rim-area.png?alt=media&token=8de3e769-4f37-4de1-9522-05476cb36795";
  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);
  return (
    <>
      <div className="flex bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[30px] h-fit max-w-[1548px] mx-auto relative z-[1] py-2">
        <Logo className="-ml-7 lg:-ml-10 py-2" />
        <HamburgerMenu open={open} setOpen={setOpen} />
        {open && <MobileMenu open={open} setOpen={setOpen} />}
        <div className="hidden items-center gap-10 lg:flex">
          <Link to="/account">
            <span className="text-white font-bold font-montserrat hover:underline underline-offset-4">
              Профиль
            </span>
          </Link>
          {pic !== picUrl ? (
            <>
              {pic ? (
                <img
                  src={pic}
                  className="rounded-full w-10 h-10 border border-white cursor-pointer"
                  alt="Avatar"
                  onClick={() => setShowModal(!showModal)}
                />
              ) : (
                <TailSpin height={40} width={40} color="white" />
              )}
            </>
          ) : (
            <>
              {pic ? (
                <img
                  src={picUrl}
                  className="w-10 h-10 rounded-full cursor-pointer"
                  onClick={() => setShowModal(!showModal)}
                />
              ) : (
                <TailSpin height={40} width={40} color="white" />
              )}
            </>
          )}
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
