const tasks = [
  {
    id: 1,
    text: "I need to complete my physics homework",
    deadline: "",
    category: "school",
    status: true,
  },
  {
    id: 2,
    text: "I need to complete my this project to learn about HTML",
    deadline: "",
    category: "personal",
    status: false,
  },
  {
    id: 3,
    text: "I need to exercise 2 times this week",
    deadline: "",
    category: "health",
    status: true,
  },
  {
    id: 4,
    text: "Hang out with my family once this week",
    deadline: "",
    category: "family",
    status: true,
  },
  {
    id: 5,
    text: "Set up a laptop for the associate dean",
    deadline: "",
    category: "work",
    status: true,
  },
];

const CATEGORIES = [
  { name: "school", color: "#ff6f61" },
  { name: "work", color: "#6b8e23" },
  { name: "personal", color: "#4682b4" },
  { name: "family", color: "#8a2be2" },
  { name: "health", color: "#da70d6" },
];

function Task({ task }) {
  // const { factObj } = props;
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

function TaskList() {
  return (
    <section>
      <h4 className="intro-tasks">Here are the list of tasks:</h4>
      <ol className="tasks-list">
        {tasks.map((task) => (
          <Task task={task} key={task.id}/>
        ))}
      </ol>
    </section>
  );
}

export default TaskList;
