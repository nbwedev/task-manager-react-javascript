import { render, screen } from "@testing-library/react"; // Enabled by Testing Library Snippet extension

// Note: Test components the way a user uses them, not the way a developer builds them.

describe("TaskInput", () => {
  it("should render an input box", () => {
    render(<TaskInput />);

    screen.debug();
  });
});
