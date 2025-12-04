import React from "react";
import { render, screen } from "@testing-library/react";
import InvoiceModal from "../components/InvoiceModal";

describe("InvoiceModal", () => {
  test("renders without crashing", () => {
    // Provide minimal required props to prevent undefined errors
    render(<InvoiceModal info={{}} />);
    // Check for a known element in the modal, e.g., the default billFrom name
    expect(screen.getByText("John Uberbacher")).toBeInTheDocument();
  });

  test("component is defined", () => {
    expect(InvoiceModal).toBeTruthy();
  });
});