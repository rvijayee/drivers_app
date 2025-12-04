import React from "react";
import { render, screen } from "@testing-library/react";
import ItemRow from "../components/InvoiceItem";

describe("ItemRow", () => {
  const defaultProps = {
    items: [],
    currency: "$",
    onRowDel: jest.fn(),
    onItemizedItemEdit: jest.fn(),
  };

  test("renders without crashing", () => {
    render(<ItemRow {...defaultProps} />);
    // Optionally, check for a known element in the rendered output
    // For now, just ensure the render didn't throw
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(ItemRow).toBeTruthy();
  });
});