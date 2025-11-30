import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceItem from "../components/InvoiceItem";

describe("InvoiceItem", () => {
  test("renders without crashing", () => {
    render(<InvoiceItem />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(InvoiceItem).toBeTruthy();
  });
});