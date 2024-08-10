import React from "react";
import Header from "./header";
import TaskForm from "./task-form";
import Categories from "./category";
import Section from "./section";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <TaskForm />
      <main className="main">
        <Categories />
        <Section />
      </main>
    </>
  );
}

export default App;
