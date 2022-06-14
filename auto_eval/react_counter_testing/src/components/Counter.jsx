import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        if(count>0){
            setCount(count-1);
        } else {
            setCount(0);
        }
    }
    return(
        <div data-testid="counter-app">
            <h1 data-testid="app-header">This is a simple counter App.</h1>
            <div style={{display:"flex", justifyContent:"center"}}>
                <button data-testid="increment-button" onClick={handleIncrement}>+</button>
                <h1 data-testid="counter" style={{margin:"25px"}}>{count}</h1>
                <button data-testid="decrement-button" onClick={handleDecrement}>-</button>
            </div>
        </div>
    )
}

export default Counter;