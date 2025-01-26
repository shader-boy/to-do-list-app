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
      <ShowTasks />
    </div>
  );
}

function TaskInput() {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/input-task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }), // send the input task as json
      });

      if (!response.ok) {
        throw new Error("Failed to send task");
      }

      const result = await response.json();
      console.log("Server response", result);

      setTask("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task-input"
          placeholder="Enter a task?"
          value={task}
          onChange={handleChange}
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function ShowTasks() {
  const tasks = ["books", "cheese", "pencil", "pen"];

  const task_list = await fetch()

  return (
    <>
      <div>
        {tasks.map((task) => {
          return <li>{task}</li>;
        })}
      </div>
    </>
  );
}

export default App;
