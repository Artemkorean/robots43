import './Robot.css'

export default function Robot({ robot }) {
    return (
        <li className="card">
            <img className="card__avatar" alt={`image-${robot.id}`} src={`https://robohash.org/${robot.id}?size=300x300`} />
            <div className="card__description">
                <h3 className="card__name">{robot.name}</h3>
                <p className="card__email">{robot.email}</p>
            </div>
        </li>
    )
}