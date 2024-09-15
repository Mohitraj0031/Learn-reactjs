
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems  from "./components/TodoItems";
import "./App.css";


function App() {

  const todoItems = [
     {
      id:0,
      name:"Buy Milk",
      duedate:"4/10/2024"

     },
     {
      id:1,
      name:"Go To College",
      duedate:"4/10/2024"

     }
    ]


  return <center className="todo-container">

    <AppName/>
    <AddTodo/>
    <TodoItems todoItems = {todoItems} ></TodoItems>

  </center>
}

export default App;
