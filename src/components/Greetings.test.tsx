import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Greetings from "./Greetings";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Greetings name="You" />);

  // ACT

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
});
