import React from "react";
import TaskEmtyState from "./TaskEmtyState";
import TaskCard from "./TaskCard";

function TaskList() {
  let filter = "all";

  const filteredTasks = [
    {
      _id: "1",
      title: "học react",
      status: "active",
      completedAt: null,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "học express js",
      status: "complete",
      completedAt: new Date(),
      createdAt: new Date(),
    },
  ];

  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmtyState filter={filter} />;
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <TaskCard key={task._id ?? index} task={task} index={index} />
      ))}
    </div>
  );
}

export default TaskList;
