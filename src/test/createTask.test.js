//If title is empty or whitespace, throw an error
//- Return a new object with properties: id, title, description, completed
//Generate a unique id (e.g., crypto.randomUUID)

import { describe, it, expect } from "vitest";
import { createTask } from "../utils/createTask";

describe("createTask", () => {
  describe("successful creation", () => {
    it("creates a task with required title and default values", () => {
      const task = createTask("My Task");

      expect(task).toMatchObject({
        title: "My Task",
        description: "",
        completed: false,
      });

      expect(task.id).toBeTypeOf("string");
      expect(task.id).toMatch(/^[0-9a-f-]{36}$/); // UUID format check
    });

    it("creates a task with custom description", () => {
      const task = createTask("My Task", "Custom description");

      expect(task.description).toBe("Custom description");
    });

    it("creates a task with completed status", () => {
      const task = createTask("My Task", "Description", true);

      expect(task.completed).toBe(true);
    });

    it("generates unique IDs for different tasks", () => {
      const task1 = createTask("Task 1");
      const task2 = createTask("Task 2");

      expect(task1.id).not.toBe(task2.id);
    });
  });

  describe("validation", () => {
    it("throws error when title is empty string", () => {
      expect(() => createTask("")).toThrow("Task is required");
    });

    it("throws error when title is only whitespace", () => {
      expect(() => createTask("   ")).toThrow("Task is required");
    });

    it("throws error when title is undefined", () => {
      expect(() => createTask()).toThrow("Task is required");
    });

    it("throws error when title is null", () => {
      expect(() => createTask(null)).toThrow("Task is required");
    });
  });
});
