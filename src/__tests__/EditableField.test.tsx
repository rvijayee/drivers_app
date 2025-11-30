import React from "react";
import { render, screen } from "@testing-library/react";
import EditableField from "../components/EditableField";

describe("EditableField", () => {
  test("renders without crashing", () => {
    render(<EditableField />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(EditableField).toBeTruthy();
  });
});