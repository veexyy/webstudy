import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { Footer } from "../src/components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "../src/components/shared/store/store";
import userEvent from "@testing-library/user-event";

describe("Footer", () => {
  test("Logo", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const logo = screen.getByTestId("logo");
    const user = userEvent.setup();
    await user.click(logo);
    expect(window.location.pathname).toBe("/");
  });

  test("About", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/о нас/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/about");
  });

  test("dev", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/разработка/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });

  test("design", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/дизайн/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });

  test("ai", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/нейросети/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });

  test("test", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );
    const link = screen.getByText(/тестирование/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });
});
