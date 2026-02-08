import React from "react";
import { GoPlus } from "react-icons/go";

export const TaskInput = ({ value, onChange, onAdd }) => (
  <div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Add tasks here..."
      aria-label="Task input"
    />

    <button onClick={onAdd} aria-label="Add task" disabled={!value.trim()}>
      <GoPlus size={20} />
    </button>
  </div>
);
