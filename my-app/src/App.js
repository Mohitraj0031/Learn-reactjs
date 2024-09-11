
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
  
  <Navbar title = "TextUtile2" AboutText = "About us" />
  {/* <Navbar /> */}
  
  <div className= "container" >
     <Textform heading = "Enter the text to Analyse" />
  </div>
 
  </>
  );
}
export default App;
