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
  const [fetchSwitch, setFetchSwitch] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/v1/tasks").then((res) => res.json());
      setTasks(res.tasks.map((task) => task));
    }
    fetchData();
  }, [fetchSwitch]);

  //Button configuration
  const onClick = () => {
    setShowAddTask(!showAddTask);
  };

  //Deleting Tasks
  const deleteTask = async (id) => {
    const res = await fetch(`/api/v1/tasks/${id}`, { method: "DELETE" }).then(
      (res) => res.json()
    );
    setFetchSwitch(!fetchSwitch);
    alert(`${res.msg}`);
  };

  //Creating Tasks
  const createTask = async (task) => {
    const res = await fetch("/api/v1/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: `${task.text}`,
        description: `${task.description}`,
        time: `${task.time}`,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setFetchSwitch(!fetchSwitch);
    alert(`${res.msg}`);
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
