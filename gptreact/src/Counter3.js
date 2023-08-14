import reacteact, {useState} from "react"

function Counter3 () {
    const [count, setCount] = useState (100)

    let aumentar = () => {
        setCount (count + 10)
    };
    let disminuir = () => {
        setCount(count - 10)
    };

    return(
        <div>
            <h2>Decimal Counter</h2>
            <p>Count: {count}</p>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={disminuir}>Disminuir</button>
        </div>
    )
}

export default Counter3