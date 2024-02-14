import { render, screen } from "@testing-library/react";
import { beforeAll, describe, expect, test } from "vitest";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NotFound from "../src/pages/404/not-found";
import About from "../src/pages/about/About";
import firebase from "firebase/compat/app";
import { LoginForm } from "../src/widgets/login/LoginForm";
import RegisterForm from "../src/widgets/Register-form/RegisterForm";
import PasswordRecover from "../src/widgets/password-recover/PasswordRecover";
import Webinars from "../src/pages/webinars/webinars";
import { Provider } from "react-redux";
import { store } from "../src/components/shared/store/store";
import MainPage from "../src/pages/main/MainPage";
import Courses from "../src/pages/courses/courses";
import Course from "../src/pages/course/course";
import PersonalAccount from "../src/pages/account/personal-account";
import Settings from "../src/pages/settings/Settings";
import CourseInfo from "../src/pages/course/course-info";

describe("Routing", () => {
  beforeAll(() => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
      databaseUrl: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    };
    firebase.initializeApp(firebaseConfig);
  });
  test("Not Found", () => {
    render(
      <MemoryRouter initialEntries={["/qwefqwe"]}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  test("About", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText(/о нас/i)).toBeInTheDocument();
  });

  test("Login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <LoginForm />
      </MemoryRouter>
    );
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });

  test("Registration", () => {
    render(
      <MemoryRouter initialEntries={["/register"]}>
        <RegisterForm />
      </MemoryRouter>
    );
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  });

  test("Password Recover", () => {
    render(
      <MemoryRouter initialEntries={["/forgot-password"]}>
        <PasswordRecover />
      </MemoryRouter>
    );
    expect(screen.getByTestId("password-recover-form")).toBeInTheDocument();
  });

  test("Webinars", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/webinars"]}>
          <Webinars />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/вебинары/i)).toBeInTheDocument();
  });

  test("Main", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <MainPage />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/помощь с трудоустройством/i)).toBeInTheDocument();
  });

  test("Courses", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/courses"]}>
          <Courses />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/все курсы/i)).toBeInTheDocument();
  });

  test("Course", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/courses/:id"]}>
          <Course />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("individual-course")).toBeInTheDocument();
  });

  test("Account", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/account"]}>
          <PersonalAccount />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/привет/i)).toBeInTheDocument();
  });

  test("Settings", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/settings"]}>
          <Settings />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/настройки/i)).toBeInTheDocument();
  });

  test("Course Info", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/account/course/:id"]}>
          <CourseInfo />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId("accordion")).toBeInTheDocument();
  });
});
