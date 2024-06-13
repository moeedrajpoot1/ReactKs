import { useState } from "react"
import "./Counter.css"
const Counter = () => {
  const [number,setNumber]=useState(0)
  const Increment=()=>{
    setNumber(number+1)
  }
  const Decrement=()=>{
    if(number>0){
      setNumber(number-1)
    }
  }
  return (
    <div>
      <h1 className="heading">Counter Component</h1>
      <p className="number">{number}</p>
      <button className="btn" onClick={Increment} >Increment +</button>
      
      <button className="btn1" onClick={Decrement}  >Decrement -</button>
    
    </div>
  )
}

export default Counter
