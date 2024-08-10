function TaskForm() {
  return (
    <form className="task-form">
      <input type="text" placeholder="Description of the task" />
      <span>200</span>
      <input type="date" placeholder="Due date" />
      <select>
        <option value="">Choose category</option>
        <option value="school">School</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="family">Family</option>
        <option value="health">Health</option>
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}

export default TaskForm;