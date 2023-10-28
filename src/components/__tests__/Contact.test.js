import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("contact us  page test cases", () => {
  // test and it both we can use for test/it block name
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should load input name inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes inside contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
