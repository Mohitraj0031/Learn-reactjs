
import css from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() { 
   let [calVal,setcalVal] = useState("");

  return <div className={css.calculator}>
    <Display displayValue = {calVal}></Display>
    <ButtonsContainer onButtonClick={() => console.log("button clicked.")}></ButtonsContainer>
  </div>
   
  
}

export default App
