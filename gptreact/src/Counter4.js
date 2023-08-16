import React,{useState} from "react";

function Counter4 (){
    let [count, setCount] = useState(0)

    let increment = () =>{
        setCount (count + 200)
    };
    let decrement = () =>{
        setCount (count - 200)
    };

    return(
        <div>
            <h2>The Countah</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
};

export default Counter4