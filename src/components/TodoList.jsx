import React from "react";
import TodoCard from "./TodoCard";
import { v4 as uuidv4, v4 } from "uuid";

export default function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo, handleCompleteTodo } = props;

  const filterTodosList =
    selectedTab === "All"
      ? todos
      : selectedTab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  const key = uuidv4();

  return (
    <>
      {filterTodosList.map((todo) => {
        return (
          <TodoCard
            key={key}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
