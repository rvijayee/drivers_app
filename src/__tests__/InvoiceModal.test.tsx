import React from "react";
import { render, screen, vi } from "@testing-library/react";
import "@testing-library/jest-dom";
import InvoiceModal from "../components/InvoiceModal";

// ⬅ mock react-bootstrap Modal so it renders children normally
jest.mock("react-bootstrap/Modal", () => {
  return ({ children }) => <div data-testid="mock-modal">{children}</div>;
});

describe("InvoiceModal", () => {
  test("renders invoice content", () => {
    render(
      <InvoiceModal
        showModal={true}           // ✔ FIXED
        closeModal={() => { }}      // ✔ FIXED
        info={{
          billFrom: "John Uberbacher",
          invoiceNumber: "123"
        }}
        items={[]}
        currency="$"
        total={0}
      />
    );

    expect(screen.getByText(/John Uberbacher/i)).toBeInTheDocument();
  });

  test("component is defined", () => {
    expect(InvoiceModal).toBeTruthy();
  });
});
