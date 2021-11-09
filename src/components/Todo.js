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
    todos = todos.map((item) => {
      if (item.id === todo.id) {
        item.completed = !todo.completed;
        return item;
      }
      return item;
    });
    setTodos([...todos]);
  }
  return (
    <div className="todo">
      <li className="todo-item">{taskText}</li>
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
