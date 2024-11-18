import './Counter.css'
import {useState} from 'react'

export default function Counter(props){
    
    // const handleClick = () => {
    //     setCount(count + 1)
    // }
    

    return (
    <div className='Counter'>
        {props.count}
    </div>
    )
}

