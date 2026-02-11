import React from "react";
import { GoPlus } from "react-icons/go";

export const TaskInput = ({ value = "", onChange, onAdd }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add task here..."
        aria-label="Task Input"
      />

      <button onClick={onAdd} aria-label="Add task" disabled={!value.trim()}>
        <GoPlus size={20} />
      </button>
    </div>
  );
};
