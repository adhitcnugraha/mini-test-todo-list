import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is for mini-test",
    },
  ]);
  return (
    <div className="container">
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setTodos([...todos, { id: todos.length + 1, title: title }]);
        }}
      >
        Add
      </button>

      <h1>Mini-Test | Todo-List</h1>
      <div className="todos-container">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            {todo.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
