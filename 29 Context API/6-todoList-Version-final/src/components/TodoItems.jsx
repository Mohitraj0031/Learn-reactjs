 
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem"
import css from "./TodoItems.module.css";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

   
  return  (   
    <div className={css.itemsContainer}>

    {todoItems.map((item)  =>  ( 
      <TodoItem  
      key = {item.name}
      todoDate={item.duedate}
      todoName={item.name} 
      >

      </TodoItem>
    ))}
    
    </div> 
  );
};

export default TodoItems;
