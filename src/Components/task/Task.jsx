import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";

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
<div className=" flex    align-middle border justify-around    " >
<div className="   w-20"   ><h1 className="   text-xl  font-semibold " style={{
    textDecoration:isComplete ? "line-through":"none"
}}   >{data}
  
</h1></div>

<button  onClick={handleComplete}  ><MdOutlineIncompleteCircle className='text-xl text-yellow-500   hover:scale-125 duration-150 hover:text-blue-700  ' /></button>
<button onClick={handleedit}   ><FaEdit className='text-xl text-green-500   hover:scale-125 duration-150 hover:text-blue-700  '/></button>
<button   onClick={handleDelete}   ><MdDeleteForever className='text-2xl text-blue-600  hover:scale-125 duration-150 hover:text-red-700 '  /> </button>


</div>
  </>
  )
}

export default Task