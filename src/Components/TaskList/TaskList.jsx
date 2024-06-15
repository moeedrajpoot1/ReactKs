import { useState } from "react"
import Task from "../task/Task"


const TaskList = () => {
    const [inputValue,setInputValue]=useState("input value")
    const [tasks,setTask]=useState([])
    
    const handleClick=()=>{
        setTask([...tasks,inputValue]);
        setInputValue("")
    }

const deleteTask=(deletetask)=>{
  const newtasks=tasks.filter((task,index)=> deletetask !== index);
  setTask(newtasks)
};


  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" name="task" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}    />
       <button onClick={handleClick}   >Add task</button>
     {tasks.map((data,index)=>(
      <Task data={data}  index={index}  deleteTask={deleteTask}  />
     ))}
    </div>
  )
}

export default TaskList