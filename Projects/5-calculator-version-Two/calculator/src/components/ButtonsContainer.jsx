import css from "./ButtonsContainer.module.css"

const buttonNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', "=", '9', '0', '.']

const ButtonsContainer = ({ onButtonClick }) => {
  return <div className={css.buttonsContainer}>

    {buttonNames.map((buttonName) => <button  key = {buttonName} className={css.button} onClick={() => onButtonClick(buttonName) }>{buttonName}</button>)}
  </div>
}

export default ButtonsContainer