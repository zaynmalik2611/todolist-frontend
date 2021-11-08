import React from "react";

// a simple form component to add task and filter tasks on completion
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  // let's make input handling functions

  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    // we are spreading all the todos in the todos array using the setTodos function
    setTodos([
      ...todos, //passing the previous state
      { text: inputText, completed: false, id: Math.random() * 1000 }, // entering a new object
    ]);
    setInputText("");
  };
  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
