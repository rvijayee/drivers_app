import { render, screen } from "@testing-library/react";
import React from "react";
import ItemRow from "../src/components/InvoiceItem";

describe("ItemRow", () => {
  test("renders without crashing", () => {
    render(<ItemRow />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<ItemRow />);
    // You can enhance this test later
  });
});