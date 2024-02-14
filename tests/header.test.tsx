import { describe, expect, test } from "vitest";
import { Header } from "../src/components/header/Header";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/components/shared/store/store";
import HeaderLinks from "../src/components/header/HeaderLinks";

describe("Header", () => {
  test("About", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/о нас/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/about");
  });

  test("Logo", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByTestId("logo");
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/");
  });

  test("Courses", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/курсы/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });

  test("Settings", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/настройки/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/settings");
  });

  test("Webinars", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/вебинары/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/webinars");
  });

  test("Login", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/войти/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/login");
  });

  test("Log out", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <HeaderLinks />
        </BrowserRouter>
      </Provider>
    );
    const token = localStorage.getItem("tokens");
    const user = userEvent.setup();
    if (token) await user.click(screen.getByText(/выйти/i));
    expect(window.location.pathname).toBe("/login");
    expect(localStorage.getItem("tokens")).toBeNull();
  });

  test("Mobile Menu open", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );
    const menu = screen.getByTestId("hamburger-menu");
    const mobileMenu = screen.findByTestId("mobile-menu");
    const user = userEvent.setup();
    await user.click(menu);
    waitFor(() => expect(mobileMenu).toBeVisible());
  });
});
