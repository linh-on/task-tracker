import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <Main />
    </>
  );
}

function Header() {
  return (
    <header class="header">
      <div className="icon">
        <img src="icon.png" alt="Logo" width="48px" height="48px" />
        <h1>Task Tracker</h1>
      </div>
      <button className="btn btn-large btn-open">Add a new task</button>
    </header>
  );
}

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

function Main() {
  return (
    <main className="main">
      <Categories />
      <Section />
    </main>
  );
}

function Categories() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all">All tasks</button>
        </li>
        <li className="category">
          <button
            className="btn btn-cat"
            style={{ backgroundColor: "#ff6f61" }}
          >
            School
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-cat"
            style={{ backgroundColor: "#6b8e23" }}
          >
            Work
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-cat"
            style={{ backgroundColor: "#4682b4" }}
          >
            Personal
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-cat"
            style={{ backgroundColor: "#8a2be2" }}
          >
            Family
          </button>
        </li>
        <li className="category">
          <button
            className="btn btn-cat"
            style={{ backgroundColor: "#da70d6" }}
          >
            Health
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default App;
