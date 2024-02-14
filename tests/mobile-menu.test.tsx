import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { MobileMenu } from "../src/components/header/MobileMenu";
import userEvent from "@testing-library/user-event";

describe("MobileMenu", () => {
  const props = {
    open: true,
    setOpen: () => !open,
  };
  test("close", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const cross = screen.getByText("×");
    const menu = screen.getByTestId("mobile-menu");
    const user = userEvent.setup();
    expect(cross).toBeVisible();
    await user.click(cross);
    waitFor(() => expect(menu).not.toBeVisible());
  });
  test("Courses", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const link = screen.getByText(/курсы/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/courses");
  });

  test("Settings", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const link = screen.getByText(/настройки/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/settings");
  });

  test("Webinars", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const link = screen.getByText(/вебинары/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/webinars");
  });
  test("About", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const link = screen.getByText(/о нас/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/about");
  });
  test("Login", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const link = screen.getByText(/войти/i);
    const user = userEvent.setup();
    await user.click(link);
    expect(window.location.pathname).toBe("/login");
  });

  test("Log out", async () => {
    render(
      <BrowserRouter>
        <MobileMenu {...props} />
      </BrowserRouter>
    );
    const token = localStorage.getItem("tokens");
    const user = userEvent.setup();
    if (token) await user.click(screen.getByText(/выйти/i));
    expect(window.location.pathname).toBe("/login");
    expect(localStorage.getItem("tokens")).toBeNull();
  });
});
