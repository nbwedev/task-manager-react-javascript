// Factory function

export const createTask = (title, description = "", completed = false) => {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    completed,
  };
};
