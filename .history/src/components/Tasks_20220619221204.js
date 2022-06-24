import { useState } from "react";

const Tasks = () => {
  const [task, setTasks] = useState();
  const tasks = [
    {
      id: 1,
      text: "Decorate Room",
      day: "Jun 24",
      reminder: true,
    },
    {
      id: 2,
      text: "Work from Home",
      day: "Jun 20",
      reminder: false,
    },
    {
      id: 3,
      text: "call home",
      day: "Jun 21",
      reminder: true,
    },
  ];
  return (
    <>
      {tasks.map((tasks) => (
        <h3 key={task.id}>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
