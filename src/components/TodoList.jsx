import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo, handleCompleteTodo } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
