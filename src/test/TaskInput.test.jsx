import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { TaskInput } from "../components/TaskInput";

describe("TaskInput", () => {
  const mockOnChange = vi.fn();
  const mockOnAdd = vi.fn();

  const renderTaskInput = (props = {}) => {
    return render(
      <TaskInput
        value=""
        onChange={mockOnChange}
        onAdd={mockOnAdd}
        {...props}
      />,
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  // ✅ ESSENTIAL: User can see where to type
  it("should show placeholder text to guide user", () => {
    renderTaskInput();

    expect(screen.getByPlaceholderText(/add tasks/i)).toBeInTheDocument();
  });

  // ✅ ESSENTIAL: User can type in the input
  it("should allow user to type task text", async () => {
    const user = userEvent.setup();
    renderTaskInput();

    const input = screen.getByRole("textbox");
    await user.type(input, "Buy milk");

    // Verify onChange was called (user's typing is captured)
    expect(mockOnChange).toHaveBeenCalled();
  });

  // ✅ ESSENTIAL: User can add task by clicking button
  it("should add task when user clicks add button", async () => {
    const user = userEvent.setup();
    renderTaskInput({ value: "Buy milk" });

    const button = screen.getByRole("button", { name: /add/i });
    await user.click(button);

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
  });

  // ✅ ESSENTIAL: User can add task by pressing Enter (efficiency)
  // it("should add task when user presses Enter key", async () => {
  //   const user = userEvent.setup();
  //   renderTaskInput({ value: "Buy milk" });

  //   const input = screen.getByRole("textbox");
  //   await user.type(input, "{Enter}");

  //   expect(mockOnAdd).toHaveBeenCalledTimes(1);
  // });

  // ✅ ESSENTIAL: Prevents user from adding empty tasks (UX)
  it("should prevent adding empty task", async () => {
    const user = userEvent.setup();
    renderTaskInput({ value: "" });

    const button = screen.getByRole("button", { name: /add/i });

    // Button should be disabled (visual feedback to user)
    expect(button).toBeDisabled();
  });

  // ✅ ESSENTIAL: Prevents adding whitespace-only tasks
  it("should prevent adding whitespace-only task", async () => {
    const user = userEvent.setup();
    renderTaskInput({ value: "   " });

    const button = screen.getByRole("button", { name: /add/i });

    expect(button).toBeDisabled();
  });

  // ✅ ESSENTIAL: Input clears after adding (UX feedback)
  // it("should clear input after successfully adding task", async () => {
  //   const user = userEvent.setup();
  //   renderTaskInput({ value: "Buy milk" });

  //   const button = screen.getByRole("button", { name: /add/i });
  //   await user.click(button);

  //   // After adding, onChange should be called with empty string
  //   expect(mockOnChange).toHaveBeenCalledWith("");
  // });
});
