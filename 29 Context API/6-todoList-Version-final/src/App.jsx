
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";



function App() {



  const initailTodoItems = [
    {
      name: "Buy Milk",
      duedate: "4/10/2024"

    },
    {

      name: "Go To College",
      duedate: "4/10/2024"

    }
  ];

  const [todoItems, setTodoItems] = useState([]); // put this is useState "initailTodoItems"

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems,
    {

      name: itemName,
      duedate: itemDueDate
    }
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

   const defaultTodoItems = [/*{
    name: "buy ghee",
    duedate: "Today"
  }*/]
  return (
    <TodoItemsContext.Provider value = {defaultTodoItems}>
 
    <center className="todo-container">

      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <WelcomeMessage ></WelcomeMessage>
      <TodoItems onDeleteClick={handleDeleteItem}></TodoItems>

    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
