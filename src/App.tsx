import { Route, Routes, Navigate, useLocation, Outlet } from "react-router-dom";
import PasswordRecover from "./widgets/password-recover/PasswordRecover";
import NotFound from "./pages/404/not-found";
import Background from "./components/shared/background";
import AuthLayout from "./components/layouts/AuthLayout";
import LoginPage from "./pages/login/login-page";
import RegisterPage from "./pages/register-page/register-page";
import PersonalAccount from "./pages/account/personal-account";
import { LKLayout } from "./components/layouts/LKLayout";
import About from "./pages/about/About";
import { Layout } from "./components/layouts/MainLayout";
import PrivateRoute from "./components/shared/private-route";
import Webinars from "./pages/webinars/webinars";
import Courses from "./pages/courses/courses";
import Course from "./pages/course/course";
import CourseInfo from "./pages/course/course-info";
import MainPage from "./pages/main/MainPage";

function App() {
  const location = useLocation();
  const user = localStorage.getItem("tokens");
  const pathName = location.pathname;

  return (
    <div className="bg-black ">
      <Background />
      {user &&
        (["/login", "/register", "/forgot-password"].includes(pathName) ? (
          <Navigate to="/" />
        ) : (
          <Outlet />
        ))}

      <div className=" min-h-screen max-w-[1536px] mx-auto">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<PasswordRecover />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/about" element={<About />}></Route>
            <Route path="/webinars" element={<Webinars />}></Route>
            <Route path="/" element={<MainPage />}></Route>
          </Route>
          <Route element={<LKLayout />}>
            <Route element={<PrivateRoute />}>
              <Route path="/courses" element={<Courses />}></Route>
              <Route path="/account" element={<PersonalAccount />}></Route>
              <Route path="/courses/:id" element={<Course />}></Route>
              <Route
                path="/account/course/:id"
                element={<CourseInfo />}
              ></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
