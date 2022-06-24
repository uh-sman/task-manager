import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={deleteTask}
        />
      </h3>
      <h2>{task.day}</h2>
    </div>
  );
};

export default Task;
