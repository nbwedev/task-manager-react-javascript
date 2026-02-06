import React from "react";
import { render, screen } from "@testing-library/react"; // Enabled by Testing Library Snippet extension
import { expect, it } from "vitest";
import { TaskInput } from "../components/TaskInput";
import { ImPrevious } from "react-icons/im";

// Note: Test components the way a user uses them, not the way a developer builds them.

describe("TaskInput", () => {
  it("should renders an input box", () => {
    render(<TaskInput />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input.value).toBe(""); // empty by default
  });

  it("should render a plus button", () => {
    render(<TaskInput />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
