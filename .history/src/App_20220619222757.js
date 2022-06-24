import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
function App() {
  const [tasks, setTasks] = useState([
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
  ]);
  return (
    <div className="container">
      <Header title="TASK TRACKER" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
