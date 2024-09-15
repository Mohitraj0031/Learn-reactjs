
import css from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
 

  return <div className={css.calculator}>
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
  </div>
   
  
}

export default App
