import { useState } from "react";

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
const Tasks = () => {
  const [tasks, setTasks] = useState();

  return (
    <>
      {tasks.map((task) => (
        <h3 key={tasks.id}>{tasks.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
