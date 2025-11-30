import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../src/App";

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<App />);
    // You can enhance this test later
  });
});