import TodoItem from "./TodoItem"
import css from "./TodoItems.module.css";

const TodoItems = ({ todoItems,onDeleteClick }) => {
    return  (   
    <div className={css.itemsContainer}>

    {todoItems.map((item)  =>  ( 
      <TodoItem  
      key = {item.name}
      todoDate={item.duedate}
      todoName={item.name} 
      onDeleteClick={onDeleteClick}
      
      >

      </TodoItem>
    ))}
    
    </div> 
  );
};

export default TodoItems;
