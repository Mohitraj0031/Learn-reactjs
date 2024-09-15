import TodoItem from "./TodoItem"

const TodoItems = ({ todoItems }) => {
    return  (   
    <div className="item-container">

    {todoItems.map( (item) =>  ( <TodoItem  key = {item.id} todoDate={item.duedate} todoName={item.name}>

    </TodoItem>
    ))}
    
    </div> 
  );
}

export default TodoItems;
