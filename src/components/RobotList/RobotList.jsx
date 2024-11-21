import './RobotList.css'
import Robot from '../Robot/Robot'

export default function RobotList({ robots }) {
    return(
        <ul className='cards'>
            {
                robots.map(robot => (<Robot robot={robot} />))
            }
        </ul>
    )
}