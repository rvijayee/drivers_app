import { render, screen } from "@testing-library/react";
import React from "react";
import InvoiceItem from "../src/components/InvoiceItem";

describe("InvoiceItem", () => {
  test("renders without crashing", () => {
    render(<InvoiceItem />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<InvoiceItem />);
    // You can enhance this test later
  });
});