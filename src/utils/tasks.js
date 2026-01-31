export const createTask = (title, description = "", completed = false) => {
  if (!title || !title.trim()) throw new Error("Task is required"); // If title is empty or whitespace, throw an error

  return {
    //- Return a new object with properties: id, title, description, completed
    id: crypto.randomUUID(), // Generate a unique id (e.g., crypto.randomUUID)
    title,
    description,
    completed,
  };
};

export const addTask = (tasks, title) => {
  if (!title || !title.trim()) return tasks; // If title is empty or whitespace, return the tasks array unchanged

  const newTask = createTask(title); // Call createTask(title) to make a new task object
  return [...tasks, newTask]; // Return a new array containing all existing tasks plus the new task
};

export const deleteTask = (tasks, taskId) => {
  /*
Filter tasks array to remove any task where task.id matches taskId
Return the filtered array
*/
  return tasks.filter((task) => task.id !== taskId);
};

export const toggleTask = (tasks, taskId) => {
  // map() iterates over tasks array
  return tasks.map((task) => {
    //If task.id matches taskId, return a new object with completed flipped (!completed)
    // Otherwise, return the task unchanged
    return task.id === taskId ? { ...task, completed: !task.completed } : task;
  });
};
