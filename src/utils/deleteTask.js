export const deleteTask = (tasks, taskId) => {
  return tasks.filter((task) => task.id !== taskId);
};
