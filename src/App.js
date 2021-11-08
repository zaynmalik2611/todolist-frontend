import { useState } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      {/* some new additions to the app */}
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
      {/*passing the todos array as props to the TodoList component */}
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
