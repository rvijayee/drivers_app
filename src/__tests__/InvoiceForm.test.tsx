import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceForm from "../components/InvoiceForm";

describe("InvoiceForm", () => {
  test("renders without crashing", () => {
    render(<InvoiceForm />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(InvoiceForm).toBeTruthy();
  });
});