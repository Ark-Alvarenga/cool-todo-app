import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true, id: "" },
  ]);

  const [selectedTab, setSelectedTab] = useState("All");

  function handleAddTodo(newTodo) {
    let newTodoList = [
      ...todos,
      { input: newTodo, complete: false, id: uuidv4() },
    ];

    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  // function handleDeleteTodo(index) {
  //   let newTodoList = todos.filter((val, valIndex) => {
  //     return valIndex !== index;
  //   });
  //   setTodos(newTodoList);
  //   handleSaveData(newTodoList);
  // }

  const handleDeleteTodo = (targetTodoId) => {
    setTodos((prevState) =>
      prevState.filter((todo) => todo.id !== targetTodoId)
    );
  };

  function handleSaveData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} todos={todos} />
    </>
  );
}

export default App;
