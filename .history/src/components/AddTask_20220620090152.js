const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input typeof="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label>Day & Time </label>
        <input typeof="text" placeholder="Add Day & Time" />
      </div>
      <div className="form-control">
        <label>Set Reminder</label>
        <input type="checkbox" />
      </div>
      <input typeof="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
