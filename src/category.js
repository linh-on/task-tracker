const CATEGORIES = [
  { name: "school", color: "#ff6f61" },
  { name: "work", color: "#6b8e23" },
  { name: "personal", color: "#4682b4" },
  { name: "family", color: "#8a2be2" },
  { name: "health", color: "#da70d6" },
];

function Categories() {
  return (
    <aside>
      <ul>
        <li className="category">
          <button className="btn btn-all">All tasks</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li className="category">
            <button
              className="btn btn-cat"
              style={{
                backgroundColor: cat.color,
              }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Categories;
