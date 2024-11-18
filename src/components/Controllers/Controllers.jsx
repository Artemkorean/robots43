import './Controllers.css'

export default function Controllers({plus,minus}){
    return (
    <div className= 'controllers'>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
    </div>
    )
}
