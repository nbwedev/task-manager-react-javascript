/*
User can select checkbox that signals task completion
User can visually see task completion indicator (strikethrough in task text)
User can click delete icon 
*/

import React from "react";
import { render, screen } from "@testing-library/react"; // (itl) snippet
import userEvent from "@testing-library/user-event"; // (itue) snippet
import { it, describe, expect, vi } from "vitest";
import TaskItem from "../components/TaskItem";

// (d) snippet
describe("TaskItem", () => {
  it("should let user mark task as completed", async () => {
    const user = userEvent.setup(); // "Create a simulated real browser user for this test."
    const mockOnToggle = vi.fn();

    render(
      <TaskItem
        task={{ id: 1, title: "Buy milk", completed: false }}
        onToggle={mockOnToggle}
        onDelete={() => {}}
      />,
    );

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox); // "This simulated user clicks this element."

    /* 
      Together this means:
        1. It was called exactly once.
        2. That one call was with argument 1.

    So you are asserting:
    "The component triggered the correct callback once with the correct task id."
     */
    expect(mockOnToggle).toHaveBeenCalledTimes(1);
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  it("should let user visually see task completion", () => {
    render(
      <TaskItem
        task={{ id: 1, title: "Buy milk", completed: true }}
        onToggle={() => {}}
        onDelete={() => {}}
      />,
    );

    const text = screen.getByText("Buy milk");
    expect(text).toHaveClass("line-through");
  });

  it("should let user delete a task", async () => {
    const user = userEvent.setup();
    const mockOnDelete = vi.fn();

    render(
      <TaskItem
        task={{ id: 1, title: "Buy milk", completed: true }}
        onToggle={() => {}}
        onDelete={mockOnDelete}
      />,
    );

    const deleteButton = screen.getByRole("button", { name: /delete/i });
    await user.click(deleteButton);

    expect(mockOnDelete).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
});
