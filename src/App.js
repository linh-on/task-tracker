import React from "react";
import Header from "./header";
import TaskForm from "./task-form";
import Categories from "./category";
import TaskList from "./task-list";
import { useState, useEffect } from "react";
import "./App.css";
import supabase from "./supabase";

function Loader() {
  return <p class="message">Loading...</p>;
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getTasks() {
        setIsLoading(true);

        let query = supabase.from("tasks").select("*");

        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }
        const { data: tasks, error } = await query.limit(1000);
        if (!error) setTasks(tasks);
        else alert("There was a problem getting data");
        setIsLoading(false);
      }
      getTasks();
    },
    [currentCategory]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <TaskForm /> : null}
      <main className="main">
        <Categories setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <TaskList tasks={tasks} setTasks={setTasks} />
        )}
      </main>
    </>
  );
}

export default App;
