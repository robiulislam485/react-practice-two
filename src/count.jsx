import { useState } from "react"

export default function Count() {
    const [count, setCount] = useState(0)
    const addHandler = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const reduceHandler = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <div style={{ border: "2px solid yellow", borderRadius: "10px" }}>
            <h1>Set Count</h1>
            <h2>Counter:{count}</h2>
            <div style={{display: 'flex', justifyContent: 'center', gap: '10px'}}>
            <button onClick={addHandler}>Add</button>
            <button onClick={reduceHandler}>Reduce</button>
            </div>
        </div>

    )
}