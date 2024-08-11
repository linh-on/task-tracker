import React from "react";
import Header from "./header";
import TaskForm from "./task-form";
import Categories from "./category";
import TaskList from "./task-list";
import { useState } from "react";
import "./App.css";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <TaskForm /> : null}
      <main className="main">
        <Categories />
        <TaskList />
      </main>
    </>
  );
}

export default App;
