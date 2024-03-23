import React from "react";
import bgImg from '../../public/oldClock.jpeg'
function Task(params) {

    const storedItems = JSON.parse(localStorage.getItem("items"));

    return(
        <>
        <div
       className=" p-8 pt-[8rem] bg-cover bg-no-repeat "
       style={{
           backgroundImage: `url(${bgImg})`,
       }}
       >

        {storedItems.map((Task, index)=>{
        <div
        className="flex justify-between w-full   gap-8"
        >
           <div key={index} className="w-full text-left  border border-gray-60 rounded-lg p-3 backdrop-blur-sm bg-white/30"> 
            <h2 className=' text-[#F2F3F5] font-bold my-2 text-center'>Task</h2>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Task</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'>  {Task.task}</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Description </label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> {Task.description}</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Date & Time</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'>  {Task.startDate} "to" {Task.endDate}</p>
            <div className="btns flex justify-end gap-2">
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Edit</button>
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Delet</button>
            </div>
            </div>
            {/* <div className="w-full text-left  border border-gray-60 rounded-lg p-3 backdrop-blur-sm bg-white/30"> 
            <h2 className=' text-[#F2F3F5] font-bold my-2 text-center'>Task</h2>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Task</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Description </label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Date & Time</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <div className="btns flex justify-end gap-2">
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Edit</button>
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Delet</button>
            </div>
            </div> */}
            
        </div>
        })}
        <div
        className="flex justify-between w-full mt-8  gap-8"
        >
            <div className="w-full text-left  border border-gray-60 rounded-lg p-3 backdrop-blur-sm bg-white/30"> 
            <h2 className=' text-[#F2F3F5] font-bold my-2 text-center'>Task</h2>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Task</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Description </label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Date & Time</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <div className="btns flex justify-end gap-2">
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Edit</button>
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Delet</button>
            </div>
            </div>
            <div className="w-full text-left  border border-gray-60 rounded-lg p-3 backdrop-blur-sm bg-white/30"> 
            <h2 className=' text-[#F2F3F5] font-bold my-2 text-center'>Task</h2>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Task</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Description </label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <label className="text-[#F2F3F5] font-semibold  " htmlFor="">Date & Time</label>
            <p  className=' outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white'> task</p>
            <div className="btns flex justify-end gap-2">
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Edit</button>
                <button
                
                 className='bg-[#0E1116] text-white p-2 rounded-lg'
                >Delet</button>
            </div>
            </div>
            
        </div>


       </div>
        </>
    )
}
export default Task