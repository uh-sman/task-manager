import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
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
  const addTask = (task) => {
    const id = Math.floor(Math.random * 10000) + 1;
    console.log(id);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="TASK TRACKER" />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
}

export default App;
