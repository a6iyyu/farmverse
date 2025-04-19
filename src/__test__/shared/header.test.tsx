import { render, screen } from "@testing-library/react";
import Header from "@/shared/navigation/header";

describe("Header", () => {
  beforeAll(() => {
    window.innerWidth = 1024;
    render(<Header />);
  });

  it("should contain 2 navigations.", () => expect(screen.getAllByRole("navigation")).toHaveLength(2));
});