import supabase from "./supabase";
import { useState, useEffect } from "react";

const CATEGORIES = [
  { name: "school", color: "#ff6f61" },
  { name: "work", color: "#6b8e23" },
  { name: "personal", color: "#ff6f61" },
  { name: "family", color: "#8a2be2" },
  { name: "health", color: "#da70d6" },
];

function Task({ task, fetchTasks }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [status, setStatus] = useState(task.status);

  useEffect(() => {
    setStatus(task.status);
  }, [task.status]);

  const deadlineStyle = {
    color: task.daysLeft < 0 ? "red" : "yellow",
  };

  async function handleCompletion() {
    setIsUpdating(true);
    const today = new Date();
    const deadlineDate = new Date(task.deadline);
    const timeDiff = deadlineDate - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // Toggle the status
    const newStatus = !status;

    // Update the status in the database
    const { data: updatedCompletion, error: updateError } = await supabase
      .from("tasks")
      .update({ status: newStatus, daysLeft: daysLeft })
      .eq("id", task.id)
      .select();

    if (updateError) {
      console.error("Error updating the task status:", updateError);
    } else {
      console.log("Task status updated:", updatedCompletion);
      setStatus(newStatus);
      fetchTasks();
    }
    setIsUpdating(false);
  }
  return (
    <li class="task">
      <p>{task.text}</p>
      <p className="deadline" style={deadlineStyle}>
        {status
          ? ""
          : task.daysLeft > 0
          ? `${task.daysLeft} days left`
          : `${task.daysLeft} days late`}
      </p>
      <span
        class="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === task.category)
            .color,
        }}
      >
        {task.category}
      </span>
      <div class="complete-btn">
        <button onClick={handleCompletion} disabled={isUpdating}>
          {status ? "✅ Completed" : "❌ Incomplete"}
        </button>
      </div>
    </li>
  );
}

function TaskList({ tasks, setTasks, fetchTasks }) {
  if (tasks.length === 0) {
    return (
      <p className="message">You don't have any tasks in this category </p>
    );
  }
  return (
    <section>
      <h4 className="intro-tasks">Here are the list of tasks:</h4>
      <ol className="tasks-list">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            setTasks={setTasks}
            fetchTasks={fetchTasks}
          />
        ))}
      </ol>
    </section>
  );
}

export default TaskList;
