import { useContext } from "react";
import css from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";


const WelcomeMessage = () => {

   const todoItems = useContext(TodoItemsContext); 
   return (
      todoItems.length === 0 && <p className={css.welcome}>Enjoy your Day 
      </p>
   
   );
   };

export default WelcomeMessage; 