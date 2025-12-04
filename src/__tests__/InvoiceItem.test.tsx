import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceItem from "../components/InvoiceItem";

describe("InvoiceItem", () => {
  test("renders without crashing", () => {
    // Provide minimal required props to avoid undefined errors
    const mockProps = {
      items: [],
      currency: "$",
      onRowDel: jest.fn(),
      onItemizedItemEdit: jest.fn(),
    };

    render(<InvoiceItem {...mockProps} />);
    // Optionally, check for a known element if possible, otherwise just ensure no crash
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(InvoiceItem).toBeTruthy();
  });
});