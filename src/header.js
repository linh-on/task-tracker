function Header({ showForm, setShowForm }) {
  return (
    <header class="header">
      <div className="icon">
        <img src="icon.png" alt="Logo" width="48px" height="48px" />
        <h1>Task Tracker</h1>
      </div>
      <button
        className="btn btn-large btn-open"
        // update state var
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Add a new task"}
      </button>
    </header>
  );
}

export default Header;
