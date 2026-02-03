//If title is empty or whitespace, return the tasks array unchanged
//Call createTask(title) to make a new task object
// Return a new array containing all existing tasks plus the new task

import { describe, it, expect } from "vitest";
import { addTask } from "../utils/addTask";

describe("addTask", () => {
  describe("successful creation", () => {
    // Verify expected behavior with valid inputs

    it("creates a new task object createTask", () => {
      const addTask = createTask(title);

      expect(addTask).toBe(tasks);
    });
  });

  describe("validation", () => {
    // Verify error handling with invalid inputs

    it("returns the original array if title is empty", () => {
      const originalTasks = [...tasks];
      const newTask = addTask("");

      expect(newTask).toEqual(tasks);
      expect(newTask).toHaveLength(tasks.length);
      expect(newTask).toBe(tasks);
    });

    it("returns the original arry if title has whitespace", () => {
      const originalTasks = [...tasks];
      const newTask = addTask("    Title    ");

      expect(newTask).toEqual(tasks);
      expect(newTask).toHaveLength(tasks.length);
      expect(newTask).toBe(tasks);
    });
  });

  //   describe("edge cases", () => {
  //     // Verify boundary conditions and special scenarios
  //   });
});
