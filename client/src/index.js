import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import Header from "./components/Header";
import ToDos from "./components/ToDos";
import Button from "./components/Button";
import AddTask from "./components/AddTask";
import { CSSTransition } from "react-transition-group";
import "./index.css";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/tasks").then((res) => res.json());

      setTasks(res.tasks.map((task) => task));
    }
    fetchData();
  }, []);

  //Button configuration
  const onClick = () => {
    setShowAddTask(!showAddTask);
  };

  //Deleting Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Creating Tasks
  const createTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Header />
      {tasks.length > 0 ? (
        <ToDos tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <h3 className="emptyPage">You dont have any tasks</h3>
      )}
      <CSSTransition
        in={showAddTask}
        timeout={2000}
        classNames="AddTask-show"
        unmountOnExit
        onEnter={() => setShowAddTask(true)}
        onExit={() => setShowAddTask(false)}
      >
        <AddTask createTask={createTask} />
      </CSSTransition>
      <CSSTransition in={showAddTask} timeout={2000} classNames="AddTaskButton">
        <Button
          onClick={onClick}
          color={showAddTask ? "tomato" : "lightgreen"}
          text={showAddTask ? "close" : "open"}
        />
      </CSSTransition>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
