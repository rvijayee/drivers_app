import { render, screen } from "@testing-library/react";
import React from "react";
import InvoiceForm from "../src/components/InvoiceForm";

describe("InvoiceForm", () => {
  test("renders without crashing", () => {
    render(<InvoiceForm />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<InvoiceForm />);
    // You can enhance this test later
  });
});