import { useEffect, useState } from "react"
import ShowPerson from "./showPerson";

export default function Person() {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setPerson(data))
    }, [])
    return (
        <div>
            <h2>Person: {person.length}</h2>
            {
                person.map(p => <ShowPerson p={p}></ShowPerson>)
            }
        </div>
    )
}