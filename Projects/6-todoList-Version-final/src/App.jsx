
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems  from "./components/TodoItems";
import "./App.css";
import { useState } from "react";


function App() {

  

  const initailTodoItems = [
     { id:0,
      name:"Buy Milk",
      duedate:"4/10/2024"

     },
     {
      id:1,
      name:"Go To College",
      duedate:"4/10/2024"

     }
    ];

    const [todoItems,setTodoItems] = useState( initailTodoItems);
    
    const handleNewItem =(itemName, itemDueDate) =>{
      console.log(`New Item Added : ${itemName} Date:${itemDueDate}`);
      const newTodoItems = [...todoItems, 
        {
          
          name: itemName,
          duedate: itemDueDate    
         }
      ];
      setTodoItems(newTodoItems);
    };

  return <center className="todo-container">

    <AppName/>
    <AddTodo onNewItem = {handleNewItem}/>
    <TodoItems todoItems = {todoItems} ></TodoItems>

  </center>
}

export default App;
