import React, { useState } from "react";

const TodoForm = (props) => {
  const [task, setTask] = useState({
    name: "",
  });

  const handleChanges = (e) => {
    setTask({
      ...task,
      name: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("The name of the new task to be added", e.target)
    e.preventDefault();
    console.log("task console.log",task.name);
    props.addListItem(task.name);
    setTask({
      name: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task.name}
          onChange={handleChanges}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
