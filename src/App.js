import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter'
import Controllers from './components/Controllers/Controllers';

import RobotList from './components/RobotList/RobotList';
import Robot from './components/Robot/Robot';

import {useState} from 'react'
import {users} from './users'

function App() {
  const [count, setCount] = useState(1)
  const plus = () => setCount(count + 1)
  const minus = () => setCount(count - 1)

  const [robots, setRobots] = useState(users)
  return (
    <div className="App">
      <header className="App-header">
        <RobotList robots = {robots}/>
        <div className='counts'>
          <Counter count={ count } />
          <Controllers plus={plus} minus={minus}/>
        </div>
      </header>
    </div>
  );
}

export default App;
