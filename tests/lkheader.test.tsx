import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { beforeAll, describe, expect, test } from "vitest";
import { store } from "../src/components/shared/store/store";
import { BrowserRouter } from "react-router-dom";
import { LKHeader } from "../src/components/lkheader/LKHeader";
import userEvent from "@testing-library/user-event";
import firebase from "firebase/compat/app";

describe("LkHeader", () => {
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
  test("Profile link", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LKHeader />
        </BrowserRouter>
      </Provider>
    );
    const user = userEvent.setup();
    const link = screen.getByText(/профиль/i);
    await user.click(link);
    expect(window.location.pathname).toBe("/account");
  });
  test("Modal Open", async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LKHeader />
        </BrowserRouter>
      </Provider>
    );
    const user = userEvent.setup();
    const token = localStorage.getItem("tokens");
    if (token) {
      await user.click(screen.getByTestId("avatar"));
      expect(screen.getByTestId("modal")).toHaveAttribute("open");
    }
  });
});
