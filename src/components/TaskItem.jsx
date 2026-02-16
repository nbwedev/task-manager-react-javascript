import React from "react";
import { BiTrashAlt } from "react-icons/bi";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span className={task.completed ? "line-through" : ""}>{task.title}</span>

      <button onClick={() => onDelete(task.id)} aria-label="Delete task">
        <BiTrashAlt size={20} />
      </button>
    </li>
  );
}
