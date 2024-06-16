import { useCallback, useState } from "react"
import Task from "../task/Task"


const TaskList = () => {
    const [inputValue,setInputValue]=useState("input value")
    const [tasks,setTask]=useState([])
    const [edittask,setEdit]=useState(null)
    
    const handleClick=()=>{
        if(edittask !==null){
          const update=tasks.map((data,index)=>
            index=== edittask ? inputValue: data
          )
          setTask(update)
          setEdit(null)
          
          window.confirm("Are You sure want to Update ?")
        }
        
        else{
          setTask([...tasks,inputValue]);
       
        }
        setInputValue("")
        
    }

const deleteTask=(deletetask)=>{
  const newtasks=tasks.filter((task,index)=> deletetask !== index);
  setTask(newtasks)
};
const editUser=(data,index)=>{
  setInputValue(data)
  setEdit(index)



}

  return (
    <div>
        <h1>To Do List</h1>
        <input type="text" name="task" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}    />
       <button onClick={handleClick}   >Add task</button>
     {tasks.map((data,index)=>(
      <Task data={data}  index={index}  deleteTask={deleteTask} editUser={editUser}  />
     ))}
    </div>
  )
}

export default TaskList