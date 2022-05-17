import React, { useState } from "react";

export const TodoInput = ({ handleTask }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const payload = {
      title: task,
      status: false
    };
    handleTask(payload);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
