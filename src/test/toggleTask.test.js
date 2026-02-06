// map() iterates over tasks array
//If task.id matches taskId, return a new object with completed flipped (!completed)
// Otherwise, return the task unchanged

import { toggleTask } from "../utils/toggleTask";

describe("toggleTask", () => {
  let tasks;

  beforeEach(() => {
    tasks = [
      { id: "1", title: "Task 1", description: "", completed: false },
      { id: "2", title: "Task 2", description: "", completed: true },
      { id: "3", title: "Task 3", description: "", completed: false },
    ];
  });

  describe("successful toggle", () => {
    it("toggles completed from false to true", () => {
      const result = toggleTask(tasks, "1");

      expect(result[0]).toEqual({
        id: "1",
        title: "Task 1",
        description: "",
        completed: true, // ✅ Was false, now true
      });
    });

    it("toggles completed from true to false", () => {
      const result = toggleTask(tasks, "2");

      expect(result[1]).toEqual({
        id: "2",
        title: "Task 2",
        description: "",
        completed: false, // ✅ Was true, now false
      });
    });

    it("returns a new array with the toggled task", () => {
      const result = toggleTask(tasks, "1");

      expect(result).toEqual([
        { id: "1", title: "Task 1", description: "", completed: true },
        { id: "2", title: "Task 2", description: "", completed: true },
        { id: "3", title: "Task 3", description: "", completed: false },
      ]);
    });

    it("preserves all other tasks unchanged", () => {
      const result = toggleTask(tasks, "1");

      expect(result[1]).toEqual(tasks[1]); // Task 2 unchanged
      expect(result[2]).toEqual(tasks[2]); // Task 3 unchanged
    });

    it("only toggles the task with matching id", () => {
      const result = toggleTask(tasks, "3");

      expect(result[0].completed).toBe(false); // Task 1 unchanged
      expect(result[1].completed).toBe(true); // Task 2 unchanged
      expect(result[2].completed).toBe(true); // Task 3 toggled
    });

    it("returns a new array (immutability)", () => {
      const result = toggleTask(tasks, "1");

      expect(result).not.toBe(tasks); // Different reference
      expect(tasks[0].completed).toBe(false); // Original unchanged
    });

    it("returns a new task object, not the same reference", () => {
      const result = toggleTask(tasks, "1");

      expect(result[0]).not.toBe(tasks[0]); // New object created
      expect(result[0]).toEqual({
        ...tasks[0],
        completed: true,
      });
    });
  });

  describe("validation", () => {
    it("returns unchanged array when taskId doesn't exist", () => {
      const result = toggleTask(tasks, "999");

      expect(result).toEqual(tasks);
      expect(result[0].completed).toBe(false);
      expect(result[1].completed).toBe(true);
      expect(result[2].completed).toBe(false);
    });

    it("returns unchanged array when taskId is empty string", () => {
      const result = toggleTask(tasks, "");

      expect(result).toEqual(tasks);
    });

    it("returns unchanged array when taskId is undefined", () => {
      const result = toggleTask(tasks, undefined);

      expect(result).toEqual(tasks);
    });

    it("returns unchanged array when taskId is null", () => {
      const result = toggleTask(tasks, null);

      expect(result).toEqual(tasks);
    });

    it("handles empty tasks array", () => {
      tasks = [];
      const result = toggleTask(tasks, "1");

      expect(result).toEqual([]);
    });
  });

  //   describe("edge cases", () => {
  //     it("toggles the only task in array", () => {
  //       tasks = [
  //         { id: "1", title: "Only task", description: "", completed: false },
  //       ];
  //       const result = toggleTask(tasks, "1");

  //       expect(result[0].completed).toBe(true);
  //     });

  //     it("toggles the first task", () => {
  //       const result = toggleTask(tasks, "1");

  //       expect(result[0].completed).toBe(true);
  //       expect(result[1].completed).toBe(true);
  //       expect(result[2].completed).toBe(false);
  //     });

  //     it("toggles the last task", () => {
  //       const result = toggleTask(tasks, "3");

  //       expect(result[0].completed).toBe(false);
  //       expect(result[1].completed).toBe(true);
  //       expect(result[2].completed).toBe(true);
  //     });

  //     it("handles multiple toggles on same task", () => {
  //       let result = toggleTask(tasks, "1");
  //       expect(result[0].completed).toBe(true);

  //       result = toggleTask(result, "1");
  //       expect(result[0].completed).toBe(false); // Back to original

  //       result = toggleTask(result, "1");
  //       expect(result[0].completed).toBe(true); // Toggled again
  //     });

  //     it("handles taskId with special characters", () => {
  //       tasks = [
  //         { id: "abc-123-xyz", title: "Task", description: "", completed: false },
  //       ];

  //       const result = toggleTask(tasks, "abc-123-xyz");

  //       expect(result[0].completed).toBe(true);
  //     });

  //     it("preserves all task properties when toggling", () => {
  //       tasks = [
  //         {
  //           id: "1",
  //           title: "Complex Task",
  //           description: "Long description",
  //           completed: false,
  //           priority: "high", // Extra property
  //           tags: ["work", "urgent"], // Extra property
  //         },
  //       ];

  //       const result = toggleTask(tasks, "1");

  //       expect(result[0]).toEqual({
  //         id: "1",
  //         title: "Complex Task",
  //         description: "Long description",
  //         completed: true, // Only this changed
  //         priority: "high",
  //         tags: ["work", "urgent"],
  //       });
  //     });
  //   });
});
