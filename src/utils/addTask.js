import { createTask } from "./createTask";

export const addTask = (tasks, title) => {
  if (!title || !title.trim()) return tasks;

  const newTask = createTask(title);
  return [...tasks, newTask];
};
