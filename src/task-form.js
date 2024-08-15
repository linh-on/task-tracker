import { useState } from "react";
import supabase from "./supabase";

const CATEGORIES = [
  { name: "school", color: "#ff6f61" },
  { name: "work", color: "#6b8e23" },
  { name: "personal", color: "#4682b4" },
  { name: "family", color: "#8a2be2" },
  { name: "health", color: "#da70d6" },
];

function TaskForm({ setTasks, setShowForm }) {
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, SetIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (text && category && text.length <= 200) {
      SetIsUploading(true);
      const today = new Date();
      const deadlineDate = new Date(deadline);
      const timeDiff = deadlineDate - today;
      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      const { data: newTask, error } = await supabase
        .from("tasks")
        .insert([{ text, category, deadline, daysLeft }])
        .select();
      SetIsUploading(false);

      if (error) {
        console.error("Error uploading task:", error.message);
      } else {
        setTasks((tasks) => [newTask[0], ...tasks]);
      }
      setText("");
      setDeadline("");
      setCategory("");
      setShowForm(false);
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description of the task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - text.length}</span>
      <input
        type="date"
        placeholder="Due date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose catergory</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name[0].toUpperCase() + cat.name.slice(1)}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default TaskForm;
