import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDtae: "4/10/2023" },
    { name: "Buy Milk", dueDtae: "4/10/2023" },
    { name: "Buy Milk", dueDtae: "4/10/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
