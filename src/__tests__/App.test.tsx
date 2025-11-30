import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(App).toBeTruthy();
  });
});