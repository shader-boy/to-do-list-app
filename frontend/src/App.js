import { useEffect, useState } from "react";
import "./App.css";
import "./Form.js";
import FormComponent from "./Form.js";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      {/* <TaskList /> */}
      <TaskInput />
    </div>
  );
}

function PrintName() {
  console.log("Hello Test Branch");
}

function TaskInput() {
  const [task, setTask] = useState("");

  const handleSubmit = function (e) {
    setTask(e.target.value);
    console.log(e.target.value);
    console.log(task);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task-input"
          placeholder="Enter a task?"
          required
        ></input>
        <button variant="contained">Submit</button>
      </form>
    </>
  );
}

function Task() {}

function TaskList() {
  const [taskList, setTaskList] = useState("");

  useEffect(() => {
    // Fetch data from Flask API
    fetch("/message")
      .then((response) => response.json())
      .then((data) => {
        setTaskList(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>React to Flask</h1>
      {taskList ? <p>{taskList.message}</p> : <p>Loading...</p>}
    </>
  );
}

export default App;
