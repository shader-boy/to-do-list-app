import { useEffect, useState } from "react";
import "./App.css";
import "./Form.js";
import FormComponent from "./Form.js";

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      {/* <ConnectionApp /> */}
      <TaskInput />
      <FormComponent />
    </div>
  );
}

function ConnectionApp() {
  const [data, setData] = useState("");

  useEffect(() => {
    // Fetch data from Flask API
    fetch("/message")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1>React to Flask</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </>
  );
}

function TaskInput() {
  return (
    <>
      <input
        type="text"
        name="task-input"
        placeholder="Enter a task?"
        required
      ></input>
      <button>Submit</button>
    </>
  );
}

function Task() {}

function TaskList() {}

export default App;
