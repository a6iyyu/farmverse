import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  render(<Home />);
  it("should contain 5 figures.", () => expect(screen.getAllByRole("figure")).toHaveLength(5));
});