import { render, screen } from "@testing-library/react";
import About from "@/app/about/page";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});