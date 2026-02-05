export const toggleTask = (tasks, taskId) => {
  // map() iterates over tasks array
  return tasks.map((task) => {
    //If task.id matches taskId, return a new object with completed flipped (!completed)
    // Otherwise, return the task unchanged
    return task.id === taskId ? { ...task, completed: !task.completed } : task;
  });
};
