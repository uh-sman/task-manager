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
        <input typeof="text" />
      </div>
    </form>
  );
};

export default AddTask;
