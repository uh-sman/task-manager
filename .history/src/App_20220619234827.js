import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Decorate Room",
      day: "Jun 24 at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Work from Home",
      day: "Jun 20 at 9:00am",
      reminder: false,
    },
    {
      id: 3,
      text: "call home",
      day: "Jun 21 at 10:00am",
      reminder: true,
    },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <Header title="TASK TRACKER" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
