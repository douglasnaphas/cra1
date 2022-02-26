import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("change textbox value 1", () => {
  render(<App />);
  const input = screen.getByRole("textbox");

  const event = new Event("change");
  expect(input).toHaveValue("foo");
  input.value = "bar";
  input.dispatchEvent(event);
  expect(input).toHaveValue("bar");
  screen.getByText("trusted");
});
test("show that users can't actually edit the text", async () => {
  render(<App />);
  const user = userEvent.setup();
  const input = screen.getByRole("textbox");

  await user.tripleClick(input);
  await user.keyboard("bar");

  expect(input).toHaveValue("bar");
  screen.getByText("untrusted"); // events from user-event are untrusted
});
