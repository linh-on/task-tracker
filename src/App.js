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

function Section() {
  return (
    <section>
      <h4 class="intro-tasks">Here are the list of tasks:</h4>
      <ol class="tasks-list">
        <li class="task">
          <p>I need to complete my physics homework</p>
          <p>[2 days left]</p>
          <span class="tag" style={{ backgroundColor: "#ff6f61" }}>
            School
          </span>
          <div class="complete-btn">
            <button>✅ Completed</button>
          </div>
        </li>
        <li class="task">
          <p>I need to complete my this project to learn about HTML</p>
          <p>[2 days left]</p>
          <span class="tag" style={{ backgroundColor: "#4682b4" }}>
            Personal
          </span>
          <div class="complete-btn">
            <button>✅ InComplete</button>
          </div>
        </li>
        <li class="task">
          <p>I need to exercise 2 times this week</p>
          <p>[3 days left]</p>
          <span class="tag" style={{ backgroundColor: "#da70d6" }}>
            Health
          </span>
          <div class="complete-btn">
            <button>❌ InComplete</button>
          </div>
        </li>
        <li class="task">
          <p>Hang out with my family once this week</p>
          <p>[2 days left]</p>
          <span class="tag" style={{ backgroundColor: "#8a2be2" }}>
            Family
          </span>
          <div class="complete-btn">
            <button>❌ InComplete</button>
          </div>
        </li>
        <li class="task">
          <p>Set up a laptop for the associate dean</p>
          <p>[1 days left]</p>
          <span class="tag" style={{ backgroundColor: "#6b8e23" }}>
            Work
          </span>
          <div class="complete-btn">
            <button>✅ InComplete</button>
          </div>
        </li>
      </ol>
    </section>
  );
}

export default App;
