import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, toggleReminder }) => {
  return (
    <div className="task" onDoubleClick={() => toggleReminder(task.id)}>
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onToggle(task.id)}
        />
      </h3>
      <h2>{task.day}</h2>
    </div>
  );
};

export default Task;
