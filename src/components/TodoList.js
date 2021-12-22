import React from "react";
import Todo from "./Todo";

// a function to render to do's
const TodoList = ({ todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* rendering the todos array using the todo component */}
        {filteredTodos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            taskText={todo.text}
            todo={todo}
          />   
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
