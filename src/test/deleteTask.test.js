//Filter tasks array to remove any task where task.id matches taskId
//Return the filtered array

import { describe, it, expect, beforeEach } from "vitest";
import { deleteTask } from "../utils/deleteTask";

describe("deleteTask", () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { id: "1", title: "Task 1", description: "", completed: false },
      { id: "2", title: "Task 2", description: "", completed: true },
      { id: "3", title: "Task 3", description: "", completed: false },
    ];
  });

  describe("successful deletion", () => {
    it("removes the task with matching id", () => {
      const result = deleteTask(tasks, "2");

      expect(result).toHaveLength(2);
      expect(result).toEqual([
        { id: "1", title: "Task 1", description: "", completed: false },
        { id: "3", title: "Task 3", description: "", completed: false },
      ]);
    });

    it("does not include the deleted task in returned array", () => {
      const result = deleteTask(tasks, "2");

      expect(result.find((task) => task.id === "2")).toBeUndefined();
    });

    it("preserves all other tasks", () => {
      const result = deleteTask(tasks, "2");

      expect(result[0]).toEqual(tasks[0]); // Task 1 preserved
      expect(result[1]).toEqual(tasks[2]); // Task 3 preserved
    });

    it("returns a new array (immutability)", () => {
      const result = deleteTask(tasks, "2");

      expect(result).not.toBe(tasks); // Different reference
      expect(tasks).toHaveLength(3); // Original unchanged
    });

    it("deletes the first task", () => {
      const result = deleteTask(tasks, "1");

      expect(result).toHaveLength(2);
      expect(result[0].id).toBe("2");
    });

    it("deletes the last task", () => {
      const result = deleteTask(tasks, "3");

      expect(result).toHaveLength(2);
      expect(result[1].id).toBe("2");
    });

    it("deletes the only task in array", () => {
      tasks = [
        { id: "1", title: "Only task", description: "", completed: false },
      ];
      const result = deleteTask(tasks, "1");

      expect(result).toEqual([]);
      expect(result).toHaveLength(0);
    });
  });

  describe("validation", () => {
    it("returns unchanged array when taskId doesn't exist", () => {
      const result = deleteTask(tasks, "999");

      expect(result).toEqual(tasks);
      expect(result).toHaveLength(3);
    });

    it("returns unchanged array when taskId is empty string", () => {
      const result = deleteTask(tasks, "");

      expect(result).toEqual(tasks);
      expect(result).toHaveLength(3);
    });

    it("returns unchanged array when taskId is undefined", () => {
      const result = deleteTask(tasks, undefined);

      expect(result).toEqual(tasks);
    });

    it("returns unchanged array when taskId is null", () => {
      const result = deleteTask(tasks, null);

      expect(result).toEqual(tasks);
    });

    it("handles empty tasks array", () => {
      tasks = [];
      const result = deleteTask(tasks, "1");

      expect(result).toEqual([]);
    });
  });

  //   describe("edge cases", () => {
  //     it("handles deleting from array with duplicate titles (different ids)", () => {
  //       tasks = [
  //         { id: "1", title: "Same", description: "", completed: false },
  //         { id: "2", title: "Same", description: "", completed: false },
  //         { id: "3", title: "Same", description: "", completed: false },
  //       ];

  //       const result = deleteTask(tasks, "2");

  //       expect(result).toHaveLength(2);
  //       expect(result.map(t => t.id)).toEqual(["1", "3"]);
  //     });

  //     it("handles taskId with special characters", () => {
  //       tasks = [
  //         { id: "abc-123-xyz", title: "Task", description: "", completed: false },
  //         { id: "def-456", title: "Task", description: "", completed: false },
  //       ];

  //       const result = deleteTask(tasks, "abc-123-xyz");

  //       expect(result).toHaveLength(1);
  //       expect(result[0].id).toBe("def-456");
  //     });

  //     it("handles numeric string ids", () => {
  //       const result = deleteTask(tasks, "2");

  //       expect(result.find(t => t.id === "2")).toBeUndefined();
  //     });

  //     it("deletes multiple times from same array", () => {
  //       let result = deleteTask(tasks, "1");
  //       result = deleteTask(result, "2");
  //       result = deleteTask(result, "3");

  //       expect(result).toEqual([]);
  //     });
  //   });
});
