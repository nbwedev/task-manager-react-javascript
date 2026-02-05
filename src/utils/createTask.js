export const createTask = (title, description = "", completed = false) => {
  if (!title || !title.trim()) throw new Error("Task is required");

  return {
    id: crypto.randomUUID(),
    title,
    description,
    completed,
  };
};
