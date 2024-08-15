const CATEGORIES = [
  { name: "school", color: "#ff6f61" },
  { name: "work", color: "#6b8e23" },
  { name: "personal", color: "#4682b4" },
  { name: "family", color: "#8a2be2" },
  { name: "health", color: "#da70d6" },
];

function Task({ task }) {
  return (
    <li class="task">
      <p>{task.text}</p>
      <p>[2 days left]</p>
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
        <button>✅ Completed</button>
      </div>
    </li>
  );
}

function TaskList({ tasks, setTasks }) {
  if (tasks.length === 0) {
    return <p className="message">You completed all tasks in this category </p>;
  }
  return (
    <section>
      <h4 className="intro-tasks">Here are the list of tasks:</h4>
      <ol className="tasks-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id} setTasks={setTasks} />
        ))}
      </ol>
    </section>
  );
}

export default TaskList;
