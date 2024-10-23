import React from "react";

export default function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
          <p>Your unique key for this task: {todo.id}</p>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(todo.id);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
