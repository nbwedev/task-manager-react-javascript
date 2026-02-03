export const deleteTask = (tasks, taskId) => {
  /*
Filter tasks array to remove any task where task.id matches taskId
Return the filtered array
*/
  return tasks.filter((task) => task.id !== taskId);
};
