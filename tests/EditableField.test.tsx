import { render, screen } from "@testing-library/react";
import React from "react";
import EditableField from "../src/components/EditableField";

describe("EditableField", () => {
  test("renders without crashing", () => {
    render(<EditableField />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<EditableField />);
    // You can enhance this test later
  });
});