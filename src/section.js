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

export default Section;
