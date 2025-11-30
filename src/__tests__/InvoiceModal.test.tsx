import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceModal from "../components/InvoiceModal";

describe("InvoiceModal", () => {
  test("renders without crashing", () => {
    render(<InvoiceModal />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(InvoiceModal).toBeTruthy();
  });
});