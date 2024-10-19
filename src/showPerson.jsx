
export default function ShowPerson({ p }) {
    const {name, email } = p;
    return (
        <div className="box">
            <h3>Name:{name}</h3>
            <p>email:{email}</p>
        </div>
    )
}