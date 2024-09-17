
import css from "./App.module.css"
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
   let [calVal,setcalVal] = useState("");

  return <div className={css.calculator}>
    <Display displayValue = {calVal}></Display>
    <ButtonsContainer></ButtonsContainer>
  </div>
   
  
}

export default App
