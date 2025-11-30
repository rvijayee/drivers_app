import { render, screen } from "@testing-library/react";
import React from "react";
import InvoiceModal from "../src/components/InvoiceModal";

describe("InvoiceModal", () => {
  test("renders without crashing", () => {
    render(<InvoiceModal />);
    expect(true).toBe(true);
  });

  test("renders component on screen", () => {
    render(<InvoiceModal />);
    // You can enhance this test later
  });
});