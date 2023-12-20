import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import Greetings from "./Greetings";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Greetings name="Hello You" />);

  // ACT

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Hello You");
});
