import React,{useState} from "react";


function Counter2 (){
    const [count, setCount] = useState (10);

    const increase = () =>{
        setCount (count + 2)
    };

    const decrease = () =>{
        setCount (count - 2)
    };

    return(
        <div>
            <h2>Pair Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
};

export default Counter2;