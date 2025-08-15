import { render, screen } from "@testing-library/react";
import Tag from "./Tag";

describe("Tag component", () => {
  it("renders the provided text", () => {
    render(<Tag text="example" />);
    expect(screen.getByTestId("tag")).toHaveTextContent("example");
  });

  it("applies the correct class names", () => {
    render(<Tag text="test" />);
    const tagElement = screen.getByTestId("tag");
    expect(tagElement).toHaveClass(
      "text-xs",
      "capitalize",
      "py-1",
      "px-2",
      "border-[1px]",
      "rounded-full"
    );
  });

  it("capitalizes the text", () => {
    render(<Tag text="hello world" />);
    const tagElement = screen.getByText("hello world");
    expect(tagElement).toHaveClass("capitalize");
  });
});
