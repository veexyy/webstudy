import { Route, Routes, Navigate, useLocation, Outlet } from "react-router-dom";
import { lazy } from "react";

import AuthLayout from "./components/layouts/AuthLayout";
import LKLayout from "./components/layouts/LKLayout";
import Layout from "./components/layouts/MainLayout";
import Background from "./components/shared/background";
const PasswordRecover = lazy(
  () => import("./widgets/password-recover/PasswordRecover")
);
const NotFound = lazy(() => import("./pages/404/not-found"));
const LoginPage = lazy(() => import("./pages/login/login-page"));
const RegisterPage = lazy(() => import("./pages/register-page/register-page"));
const PersonalAccount = lazy(() => import("./pages/account/personal-account"));
const About = lazy(() => import("./pages/about/About"));
const PrivateRoute = lazy(() => import("./components/shared/private-route"));
const Webinars = lazy(() => import("./pages/webinars/webinars"));
const Courses = lazy(() => import("./pages/courses/courses"));
const Course = lazy(() => import("./pages/course/course"));
const CourseInfo = lazy(() => import("./pages/course/course-info"));
const MainPage = lazy(() => import("./pages/main/MainPage"));
function App() {
  const location = useLocation();
  const user = localStorage.getItem("tokens");
  const pathName = location.pathname;
  return (
    <div className="bg-black min-h-screen">
      <Background />
      {user &&
        (["/login", "/register", "/forgot-password"].includes(pathName) ? (
          <Navigate to="/" />
        ) : (
          <Outlet />
        ))}
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<PasswordRecover />} />{" "}
        </Route>
        <Route element={<Layout />}>
          <Route path="/about" element={<About />}></Route>
          <Route path="/webinars" element={<Webinars />}></Route>
          <Route path="/" element={<MainPage />}></Route>
        </Route>
        <Route element={user ? <LKLayout /> : <Layout />}>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/courses/:id" element={<Course />}></Route>
        </Route>
        <Route element={<LKLayout />}>
          <Route element={<PrivateRoute />}>
            <Route path="/account" element={<PersonalAccount />}></Route>
            <Route path="/account/course/:id" element={<CourseInfo />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
