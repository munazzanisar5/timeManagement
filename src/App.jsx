import { useState, useEffect } from "react";
import React from "react";
// import { createPortal } from 'react-dom';
import bgImg from "../public/oldClock.jpeg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./App.css";





const EditableDiv = ({ data, setData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState(data);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempData(data);
  };

  const handleSaveClick = () => {
    setData(tempData);
    console.log(tempData);
    setIsEditing(false);
  };

  // const handleCancelClick = () => {
  //   setIsEditing(false);
  //   setTempData(data); // Reset tempData to original value
  // };

  const handleChange = (e) => {
    setTempData(e.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={tempData} onChange={handleChange} />
          <br />
          <button className='rounded-full p-2 px-4 bg-amber-500 text-white' onClick={handleSaveClick}>Save</button>
          <button className='rounded-full p-2 px-4 bg-amber-500 text-white' onClick={handleCancelClick}>Cancel</button>
        </div>
      ) : (
        <div onClick={handleEditClick}>{data}</div>
      )}
    </div>
  );
};





function App() {
  let [inputTask, setInputTask] = useState({
    taskName: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  // comparison of dates
 
  // console.log(inputTask.startDate);

  let currentDate = new Date().toString();
  // const today = new Date().toISOString().slice(0,16);
  // console.log("current date "+ new Date().toString().slice(0,16));
  // console.log("input date "+ inputTask.startDate);

  const [items, setItems] = useState([]);
  let data = [];

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputTask((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputData);
    // console.log("Submitted value:", inputTask);

    setItems([...items, inputTask]);
    // console.log("setItem");
    // console.log(items);
  };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setItems(prevItems => [...prevItems, inputTask]);
  //   setInputTask({
  //     taskName: '',
  //     description: '',
  //     startDate: '',
  //     endDate: ''
  //   });
  // };

  const handleEdit = (index,task) => {
    setInputTask(items[index]);
    console.log(task);
    setEditIndex(index);
  };

  const handleRemoveField = (index) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    data.push(items);

    localStorage.setItem("items", JSON.stringify(items));

    const storedItems = JSON.parse(localStorage.getItem("items"));

    const timer = setInterval(() => {
      setDate(new Date());
      // console.log(new Date());
      // console.log(typeof inputTask.endDate);
      
     
      const today = new Date()
      .toISOString()
      .slice(0, 16);
      // const currentDate = new Date().toISOString().slice(0, 16);

      // console.log("curr " + today);
      // console.log("input " +  inputTask.startDate);

      if (inputTask.startDate === today) {
            console.log("match");
            alert("Alarm! Wake up!");
            
          
          } else {
            console.log("notmatch");
            // console.log("InputDate "+strDate);
            // console.log("current "+new Date());
          }
            // console.log(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // console.log("get");
    // console.log(storedItems);
    // console.log("get"+storedItems);
  }, [items]);



  

  return (
    <>
      <div
        // className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black"
        className=" bg-cover bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg  backdrop-blur-sm bg-white/30">
          <h1 className=" text-[#F2F3F5] font-bold mt-2">Time Management</h1>
          <p> current {currentDate}</p>
          <form action="" onSubmit={handleSubmit} className="p-4">
            <input
              type="text"
              name="taskName"
              value={inputTask.taskName || ""}
              onChange={handleInputChange}
              placeholder="Enter Task"
              className=" outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white"
            />

            <input
              type="text"
              name="description"
              value={inputTask.description || ""}
              onChange={handleInputChange}
              placeholder="Description"
              className=" outline-none p-1 block rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white"
            />

            <div className="flex justify-between gap-2">
              <input
                type="datetime-local"
                name="startDate"
                value={inputTask.startDate || ""}
                onChange={handleInputChange}
                placeholder="Enter Value"
                className=" outline-none p-1 block rounded bg-[#a3a5ad] text-white mb-3 w-full"
              />
              <p className="text-[#F2F3F5] font-bold">to</p>
              <input
                type="datetime-local"
                name="endDate"
                value={inputTask.endDate || ""}
                onChange={handleInputChange}
                placeholder="Enter Value"
                className=" outline-none p-1 block rounded bg-[#a3a5ad] text-white mb-3 w-full"
              />
            </div>

            {/* <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
         <button onClick={() => setShowModal(false)}>Close</button>
       
       
      )} */}
            {/* <input type="datedatetime-local" /> */}

            <button
              className="bg-[#0E1116] text-white p-2 rounded-lg"
              type="submit"
            >
              Create Task
            </button>
          </form>
          

         </div>
        <div className=" p-8 pt-[8rem] w-full">
          <div className="flex justify-between w-full flex-wrap  gap-8">
            {items.map((task, index) => (
              <div
                key={index}
                className="w-full md:w-[47%] lg:w-[48%]  text-left  border border-gray-60 rounded-lg p-3 backdrop-blur-sm bg-white/30"
              >
                <h2 className=" text-[#F2F3F5] font-bold my-2 text-center">
                  Task
                </h2>

                <div>
                  <label className="text-[#F2F3F5] font-semibold  " htmlFor="">
                    Task
                  </label>
                  <p className=" outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white">
                    {task.taskName}
                  </p>

                  <input
                    type="text"
                    name="taskName"
                    value={task.taskName}
                    onChange={handleInputChange}
                    placeholder="Enter Task"
                    className=" outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white"
                  />
                  <label className="text-[#F2F3F5] font-semibold  " htmlFor="">
                    Description
                  </label>
                  <p className=" outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white">
                    {task.description}
                  </p>
                  <label className="text-[#F2F3F5] font-semibold  " htmlFor="">
                    Date & Time
                  </label>
                  <p className=" outline-none block p-1 rounded bg-[#a3a5ad] text-white mb-3 w-full placeholder:text-white">
                    {task.startDate} "to" {task.endDate}
                  </p>
                </div>

                <div className="btns flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(task.index)}
                    className="bg-[#0E1116] text-white p-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-[#0E1116] text-white p-2 rounded-lg"
                    onClick={() => handleRemoveField(index)}
                  >
                    Delet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <EditableDiv data={savedData} setData={setSavedData} /> */}
      </div>
    </>
  );
}

export default App;
