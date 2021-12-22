import { useState, useEffect } from "react";
import "./App.css";

// Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [list, setList] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect for getting the todos from local storage when the app starts
  useEffect(() => {
    getFromLocalStorage();
  }, []);

  // useEffect for todos or filter update
  useEffect(()=> {
    filterHandler();
    saveToLocalStorage();
  }, [todos, list]);

  // methods
  const filterHandler = () => {
    switch(list) {
      case "completed":
        setFilteredTodos(todos.filter( todo => todo.completed === true ));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter( todo => todo.completed === false ));
        break;
      default:
        setFilteredTodos(todos);
    } 
  }

  // saving to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // getting todos from local storage
  const getFromLocalStorage = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

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
        setList={setList}
      />
      {/*passing the todos array as props to the TodoList component */}
      <TodoList 
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
