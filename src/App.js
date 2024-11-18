import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter'
import Controllers from './components/Controllers/Controllers';

import {useState} from 'react'

function App() {
  const [count, setCount] = useState(1)
  const plus = () => setCount(count + 1)
  const minus = () => setCount(count - 1)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='counts'>
          <Counter count={ count } />
          <Controllers plus={plus} minus={minus}/>
        </div>
      </header>
    </div>
  );
}

export default App;
