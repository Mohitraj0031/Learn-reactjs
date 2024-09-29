import { useDispatch } from "react-redux";
import { useRef } from "react";
import  {counterActions}  from "../store";

const Controls = () => {

    const dispatch = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () => {
        dispatch(counterActions.increment() );
    };
    const handleDecrement = () => {
        dispatch(counterActions.decrement() );
    };
    const handlePrivacyToggle = () => {
        dispatch({ type: "PRIVATE_TOGGLE" });
    }
    const handleAdd = () => {
        dispatch({
            type: "ADD", payload: { num: inputElement.current.value, },
        });
        inputElement.current.value = "";
    }
    const handleSubtract = () => {
        dispatch({
            type: "SUBTRACT", payload: { num: inputElement.current.value, },
        });
        inputElement.current.value = "";
    }


    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
                <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
                <button type="button" className="btn btn-warning" onClick={handlePrivacyToggle} >Privacy Toggle</button>
            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
                <input type="text" placeholder="Enter number" className="number-input" ref={inputElement} />
                <button type="button" className="btn btn-info" onClick={handleAdd}>ADD</button>

                <button type="button" className="btn btn-danger" onClick={handleSubtract}>Subtract</button>
            </div>
        </>
    );
}

export default Controls;