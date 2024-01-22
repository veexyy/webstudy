import { getDatabase, onValue, ref, set } from "firebase/database";
import { inputStyle } from "../../components/shared/consts";
import { useEffect, useState, useRef } from "react";
import { AxiosResponse } from "axios";
import axiosApiInterceptor from "../../api";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { MdPhotoCamera } from "react-icons/md";
export default function Settings() {
  const db = getDatabase();
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dbName, setDbName] = useState<string>("");
  const [dbLastName, setDbLastName] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [style, setStyle] = useState("invisible");
  const dbRef = ref(
    db,
    `users/${localStorage.getItem("localId")}/data/personal_data`
  );
  const picRef = ref(
    db,
    `users/${localStorage.getItem("localId")}/data/picture`
  );
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const storage = getStorage();
  const writeUserData = () => {
    if (name && lastName) {
      try {
        set(dbRef, {
          name: name,
          lastName: lastName,
        });
      } catch (error) {
        return alert("Что-то пошло не так. Перезагрузите страницу.");
      }
    }
  };
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${apiKey}`;
  const pickFile: React.RefObject<HTMLInputElement> = useRef(null);
  const changePassword = async () => {
    if (newPassword === repeatPassword && newPassword !== "") {
      const res: AxiosResponse = await axiosApiInterceptor.post(`${url} `, {
        idToken: JSON.parse(localStorage.getItem("tokens")!).idToken,
        password: repeatPassword,
        returnSecureToken: true,
      });
      return res.data;
    }
  };
  const getUserData = async () => {
    try {
      onValue(dbRef, (snapshot) => {
        if (snapshot.val()) {
          setDbName(snapshot.val().name);
          setName(snapshot.val().name);
          setDbLastName(snapshot.val().lastName);
          setLastName(snapshot.val().lastName);
        }
      });
    } catch (error) {
      return alert("Что-то пошло не так. Перезагрузите страницу.");
    }
  };
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;
    else {
      const ref = storageRef(
        storage,
        `avatars/${localStorage.getItem("localId")}/${file.name}`
      );
      await uploadBytes(ref, file);
      await getDownloadURL(ref).then((url) => {
        localStorage.setItem("avatar", url);
        set(picRef, url);
      });
    }
  };
  useEffect(() => {
    changePassword();
    getUserData();
  }, [newPassword]);

  return (
    <>
      <div className="flex flex-col gap-12 sm:gap-24 justify-between mt-3 lg:mt-16 px-4 sm:px-0">
        <section className="px-5 py-6 rounded-3xl border border-white flex flex-col sm:flex-row items-center gap-8">
          <div
            id="image-section"
            onClick={() => pickFile.current?.click()}
            onMouseEnter={() => setStyle("visible")}
            onMouseLeave={() => setStyle("invisible")}
            className="relative duration-300 hover:opacity-60 cursor-pointer"
          >
            <img
              id="avatar"
              src={localStorage.getItem("avatar")!}
              className="w-36 h-36 rounded-full"
            />
            <MdPhotoCamera
              id="camera"
              className={`fill-white absolute top-[64px] left-[63px] ${style}`}
            />
          </div>
          <div className="flex flex-col text-white font-montserrat text-lg">
            <div className="flex gap-1 justify-center sm:justify-start">
              <span>{dbName}</span>
              <span>{dbLastName}</span>
            </div>
            <span>{localStorage.getItem("email")}</span>
          </div>
        </section>
        <div className="flex items-center justify-between flex-col sm:flex-row border border-white px-10 pt-2 pb-10 sm:p-10  rounded-3xl">
          <div className="text-white text-center font-montserrat font-bold text-base sm:text-2xl sm:w-1/2 my-3 flex items-center justify-center sm:justify-start">
            Учетные данные
          </div>
          <div className="flex-col gap-5 flex items-center w-full sm:w-1/2">
            <input
              type="text"
              name="first_name"
              placeholder="Имя"
              className={inputStyle + " min-w-[200px]"}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              name="last_name"
              placeholder="Фамилия"
              className={inputStyle + " min-w-[200px]"}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <button
              onClick={writeUserData}
              className="text-white border font-montserrat font-bold border-white rounded-xl p-3 w-[200px] "
            >
              Сохранить
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row my-3 justify-between items-center border border-white px-10 pt-2 pb-10 sm:p-10 rounded-3xl">
          <div className="text-white font-montserrat font-bold text-base sm:text-2xl my-3 w-1/2 flex items-center justify-center sm:justify-start">
            Пароль
          </div>
          <div className="flex-col gap-5 flex w-full sm:w-1/2 items-center">
            <input
              type="password"
              className={inputStyle + " min-w-[200px]"}
              name="new_password"
              placeholder="Новый пароль"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              name="repeat_password"
              placeholder="Повторите пароль"
              className={inputStyle + " min-w-[200px]"}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <button
              onClick={changePassword}
              className="text-white border font-montserrat font-bold border-white rounded-xl p-3 w-[200px] "
            >
              Сменить пароль
            </button>
          </div>
          <input
            ref={pickFile}
            type="file"
            name="avatar"
            className="text-white w-0 h-0 p-0 m-0 opacity-0"
            onChange={handleImageChange}
            accept="image/*"
          />
        </div>
      </div>
    </>
  );
}
