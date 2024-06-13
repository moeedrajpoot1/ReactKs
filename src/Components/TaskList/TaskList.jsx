import { useState } from "react"


const TaskList = () => {
    const [inputValue,setInputValue]=useState("input value")
    const [task,setTask]=useState([])
    
    const handleClick=()=>{
        setTask([...task,inputValue]);
        setInputValue("")
    }


  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}    />
       <button onClick={handleClick}   >Add task</button>
      {task.map((data,index)=>(
        <h2  key={index}>{data}</h2>
      ))}
    </div>
  )
}

export default TaskList