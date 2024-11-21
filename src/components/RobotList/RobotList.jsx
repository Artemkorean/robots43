import './RobotList.css'
import Robot from '../Robot/Robot'

export default function RobotList({ robots }) {
    return(
        <ul className='cards'>
            {
                robots.map(robot => (<Robot key={`robot-${robot.id}`} robot={robot} />))
            }
        </ul>
    )
}