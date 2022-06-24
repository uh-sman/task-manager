import { FaTimes } from "react-icons/fa";
const Task = ({ task }) => {
  return (
    <div className="task">
      <h3>
        {task.text} <FaTimes />
      </h3>
      <h2>{task.day}</h2>
    </div>
  );
};

export default Task;
