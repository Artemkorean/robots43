import './Robot.css'

export default function Robot({ robot }) {
    return (
        <li class="card">
            <img class="card__avatar" alt={`image-${robot.id}`} src={`https://robohash.org/${robot.id}?size=300x300`} />
            <div class="card__description">
                <h3 class="card__name">{robot.name}</h3>
                <p class="card__email">{robot.email}</p>
            </div>
        </li>
    )
}