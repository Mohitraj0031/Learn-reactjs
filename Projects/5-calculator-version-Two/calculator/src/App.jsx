
import css from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() { 
   const [calVal,setcalVal] = useState("");
   const onButtonClick = (buttonText) => {
    if(buttonText === "C"){
      setcalVal("");

    }else if(buttonText === "="){
      const result = eval(calVal);
      setcalVal(result);
    }else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
     }
  }

  return <div className={css.calculator}>
    <Display displayValue = {calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
   
  
}

export default App
