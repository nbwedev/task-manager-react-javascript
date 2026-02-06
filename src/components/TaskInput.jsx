import React from "react";
import { GoPlus } from "react-icons/go";

export const TaskInput = ({ value, onChange, onAdd }) => (
  <div>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Add tasks here..."
    />

    <button onClick={onAdd}>
      <GoPlus size={20} />
    </button>
  </div>
);
