import { useState } from "react"
import Task from "../task/Task"


const TaskList = () => {
    const [inputValue,setInputValue]=useState(" ")
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
   
<div className="relative w-full bg-white">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div className="inline-flex items-center space-x-2">
      <span>
        <svg width={30} height={30} viewBox="0 0 50 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z" fill="black" />
        </svg>
      </span>
      <span className="font-bold">TO Do List</span>
    </div>
    <div className="  mx-auto" >
   <div className="flex w-full items-center  ">
  <input type="text" name="task" value={inputValue}  onChange={(e)=>setInputValue(e.target.value)}  className="flex h-10  mr-20   min-w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" type="email" placeholder="Email" />
<button type="button" onClick={handleClick} className=" mr-20 inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80">
  Add
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-2 h-4 w-4">
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
</button>



</div>


    </div>
 
    <div className="lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 cursor-pointer">
        <line x1={4} y1={12} x2={20} y2={12} />
        <line x1={4} y1={6} x2={20} y2={6} />
        <line x1={4} y1={18} x2={20} y2={18} />
      </svg>
    </div>
  </div>
 



<section className="mx-auto w-full max-w-7xl px-4 py-4">
  <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 className="text-lg font-semibold">Employees</h2>
      <p className="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
      </p>
    </div>
    <div>
      <button type="button" className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
        Add new employee
      </button>
    </div>
  </div>
  <div className="mt-6 flex flex-col">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div className="overflow-hidden border border-gray-200 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr >
                
                <th scope="col" className=" flex justify-around  px-12 py-3.5 text-left text-sm font-normal text-gray-700">
                  Title
                  <div>Completed</div>
                  <div>Edit</div>
                  <div>Delete</div>
                </th>
              
               
               
               
               
             
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
              
                <td className="whitespace-nowrap px-12 py-4    ">
                {tasks.map((data,index)=>(
      <Task data={data}  index={index}  deleteTask={deleteTask} editUser={editUser}  />
     ))}
                </td>
               
                
          
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>







 
</div>









  
  )
}

export default TaskList