const Todo = ({ taskText, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    // for (let i = 0; i < todos.length; i++ ) {
    //   if (todo.id === todos[i].id) {
    //     todos[i].completed = !todos[i].completed;
    //   } 
    // }
    // setTodos([...todos]);
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    }));
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{taskText}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
