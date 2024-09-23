import TodoItem from "./TodoItem"
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
    return  (   
    <div className={css.ItemsContainer}>

    {todoItems.map( (item) =>  ( <TodoItem  key = {item.id} todoDate={item.duedate} todoName={item.name}>

    </TodoItem>
    ))}
    
    </div> 
  );
}

export default TodoItems;
