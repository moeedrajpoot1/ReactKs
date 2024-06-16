import { useState } from "react";


const Task = ({data,deleteTask,index,editUser}) => {
    const [isComplete,setIsComplete]=useState(false)

    const handleDelete=()=>{
        deleteTask(index);
        setIsComplete(false)
    }
    const handleComplete=()=>{
setIsComplete(!isComplete)


    }
    const handleedit=()=>{
      editUser(data,index)
      


    }
    
  

   
  return (
  <>

<h1 style={{
    textDecoration:isComplete ? "line-through":"none"
}}   >{data}
  
</h1>
<button onClick={handleDelete}   >Delete</button>
<button  onClick={handleComplete}  >Completed</button>
<button onClick={handleedit}   >Edit</button>



  </>
  )
}

export default Task