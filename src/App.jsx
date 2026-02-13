import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { addTask } from "./utils/addTask";
import { deleteTask } from "./utils/deleteTask";
import { toggleTask } from "./utils/toggleTask";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const updated = addTask(tasks, inputValue);
    setTasks(updated);
    setInputValue("");
  };

  const handleToggle = (taskId) => {
    const updated = toggleTask(tasks, taskId);
    setTasks(updated);
  };

  const handleRemove = (taskId) => {
    const updated = deleteTask(tasks, taskId);
    setTasks(updated);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>TASK MANAGER</h1>
      <p>Keep track of your tasks!</p>

      <TaskInput
        value={inputValue}
        onChange={setInputValue}
        onAdd={handleAdd}
      />

      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", marginTop: "40px" }}>
          No tasks yet. Add one above!
        </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleRemove}
            />
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px", color: "#666" }}>
        <small>
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length}
        </small>
      </div>
    </div>
  );
}
