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

export default Categories;
