//If title is empty or whitespace, throw an error
//- Return a new object with properties: id, title, description, completed
//Generate a unique id (e.g., crypto.randomUUID)

import { createTask } from "../utils/createTask";

import { describe, it, expect, beforeEach } from "vitest";
import { addTask } from "../utils/addTask";

describe("addTask", () => {
  let tasks;

  beforeEach(() => {
    // Setup: Create a fresh tasks array before each test
    tasks = [
      { id: "1", title: "Existing task", description: "", completed: false },
    ];
  });

  describe("successful creation", () => {
    it("adds a new task to the tasks array", () => {
      const result = addTask(tasks, "New task");

      expect(result).toHaveLength(2);
      expect(result[0]).toEqual(tasks[0]); // Original task preserved
      expect(result[1]).toMatchObject({
        title: "New task",
        description: "",
        completed: false,
      });
      expect(result[1].id).toBeDefined();
    });

    it("returns a new array (does not mutate original)", () => {
      const result = addTask(tasks, "New task");

      expect(result).not.toBe(tasks); // Different reference
      expect(tasks).toHaveLength(1); // Original unchanged
      expect(result).toHaveLength(2); // New array has more items
    });

    it("uses createTask to generate the task object", () => {
      const result = addTask(tasks, "Test task");
      const newTask = result[result.length - 1];

      // Verify structure matches createTask output
      expect(newTask).toHaveProperty("id");
      expect(newTask).toHaveProperty("title", "Test task");
      expect(newTask).toHaveProperty("description", "");
      expect(newTask).toHaveProperty("completed", false);
    });

    it("preserves all existing tasks", () => {
      tasks = [
        { id: "1", title: "Task 1", description: "", completed: false },
        { id: "2", title: "Task 2", description: "", completed: true },
      ];

      const result = addTask(tasks, "Task 3");

      expect(result).toHaveLength(3);
      expect(result[0]).toEqual(tasks[0]);
      expect(result[1]).toEqual(tasks[1]);
      expect(result[2].title).toBe("Task 3");
    });
  });

  describe("validation", () => {
    it("returns the same array reference when title is empty", () => {
      const result = addTask(tasks, "");

      expect(result).toBe(tasks); // Same reference
      expect(result).toHaveLength(1); // Length unchanged
    });

    it("returns the same array reference when title is only whitespace", () => {
      const result = addTask(tasks, "     ");

      expect(result).toBe(tasks);
      expect(result).toHaveLength(1);
    });

    it("returns the same array reference when title is tabs/newlines", () => {
      const result = addTask(tasks, "\t\n   ");

      expect(result).toBe(tasks);
    });

    it("returns the same array reference when title is undefined", () => {
      const result = addTask(tasks, undefined);

      expect(result).toBe(tasks);
    });

    it("returns the same array reference when title is null", () => {
      const result = addTask(tasks, null);

      expect(result).toBe(tasks);
    });
  });

  // describe("edge cases", () => {
  //   it("handles title with leading/trailing whitespace (valid content)", () => {
  //     const result = addTask(tasks, "  Valid Task  ");

  //     expect(result).toHaveLength(2);
  //     expect(result[1].title).toBe("  Valid Task  ");
  //     // Note: The function preserves whitespace, doesn't trim
  //   });

  //   it("handles special characters and emoji", () => {
  //     const result = addTask(tasks, "Buy groceries 🛒 #urgent");

  //     expect(result).toHaveLength(2);
  //     expect(result[1].title).toBe("Buy groceries 🛒 #urgent");
  //   });

  //   it("handles very long title", () => {
  //     const longTitle = "A".repeat(500);
  //     const result = addTask(tasks, longTitle);

  //     expect(result).toHaveLength(2);
  //     expect(result[1].title).toBe(longTitle);
  //   });

  //   it("handles single character title", () => {
  //     const result = addTask(tasks, "X");

  //     expect(result).toHaveLength(2);
  //     expect(result[1].title).toBe("X");
  //   });

  //   it("adds task to empty array", () => {
  //     tasks = [];
  //     const result = addTask(tasks, "First task");

  //     expect(result).toHaveLength(1);
  //     expect(result[0].title).toBe("First task");
  //   });
  // });
});
