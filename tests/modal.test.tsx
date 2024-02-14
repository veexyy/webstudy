import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import ModalLinks from "../src/components/lkheader/modalLinks";
import { Provider } from "react-redux";
import { store } from "../src/components/shared/store/store";
import userEvent from "@testing-library/user-event";

describe("Modal", () => {
  test("About", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalLinks />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/о нас/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/about");
  });
  test("Webinars", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalLinks />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/вебинары/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/webinars");
  });
  test("Courses", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalLinks />
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
          <ModalLinks />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/настройки/i);
    const user = userEvent.setup();
    await user.click(link);
  });
  test("Exit", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ModalLinks />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/выход/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(localStorage.getItem("tokens")).toBeNull();
    expect(window.location.pathname).toBe("/login");
  });
});
