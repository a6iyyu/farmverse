import { render, screen } from "@testing-library/react";
import HamburgerMenu from "@/shared/navigation/hamburger-menu";

describe("Hamburger Menu", () => {
  beforeAll(() => {
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"))
    render(<HamburgerMenu />);
  });

  it("should contain 2 buttons.", () => expect(screen.getAllByRole("button")).toHaveLength(2));
});