import { useState } from "react";
import { TaskInput } from "./components/TaskInput";

export default function App() {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    console.log(task);
    setTask("");
  };

  return (
    <div>
      <h1>TASK MANAGER</h1>

      <TaskInput value={task} onChange={setTask} onAdd={handleAdd} />
    </div>
  );
}
