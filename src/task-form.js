import { useState } from "react";

function TaskForm() {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");

  return (
    <form className="task-form">
      <input
        type="text"
        placeholder="Description of the task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>200</span>
      <input
        type="date"
        placeholder="Due date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
