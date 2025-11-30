import React from "react";
import { render, screen } from "@testing-library/react";
import ItemRow from "../components/InvoiceItem";

describe("ItemRow", () => {
  test("renders without crashing", () => {
    render(<ItemRow />);
    expect(screen).toBeDefined();
  });

  test("component is defined", () => {
    expect(ItemRow).toBeTruthy();
  });
});