import { render, screen } from "@testing-library/react";
import DetailItem from "./DetailItem";

describe("DetailItem", () => {
  it("renders correctly", () => {
    render(<DetailItem text="example" icon="star" color="blue" />);
    expect(screen.getByTestId("detail-item")).toBeInTheDocument();
  });
});
