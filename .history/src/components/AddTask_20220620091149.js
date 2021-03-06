import { useState } from "react";
const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState("");
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          typeof="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time </label>
        <input typeof="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
