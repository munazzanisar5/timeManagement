import React, { useState } from 'react';

// (prop , num=3)


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

  const handleCancelClick = () => {
    setIsEditing(false);
    setTempData(data); // Reset tempData to original value
  };

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

const FormAndEditableDiv = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [savedData, setSavedData] = useState([]);

  const handleInputChange = (event) => {
    // const { name, value } = e.target.value;
    const name = event.target.name;
    const value = event.target.value;
    console.log(formData);
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });

    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save the form data
    // setSavedData(`Name: ${formData.name}, Email: ${formData.email} `);
    setSavedData([...savedData, formData.name]);
    
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
      </form>
      <hr />
      <EditableDiv data={savedData} setData={setSavedData} />
    </div>
  );
};

export default FormAndEditableDiv;



























// import React, { useState } from 'react';

// function AlarmClock() {
//   const [alarmTime, setAlarmTime] = useState('');
//   const [status, setStatus] = useState('');

//   // Function to check the current time and trigger alarm if it matches
//   function checkAlarm() {
//     const now = new Date();
//     const hours = now.getHours();
//     const minutes = now.getMinutes();

   
//     const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);

//     if (hours === alarmHours && minutes === alarmMinutes) {
//       alert("Alarm! Wake up!");
//       setStatus(`Alarm triggered at ${alarmTime}`);
//     }
//   }

//   // Function to set the alarm time
//   function setAlarm() {
//     if (alarmTime) {
//       setInterval(checkAlarm, 1000);
//       setStatus(`Alarm is set for ${alarmTime}`);
//     } else {
//       alert("Please enter a valid alarm time.");
//     }
//   }

//   return (
//     <div>
//       <h2>Simple Alarm Clock</h2>
//       <label htmlFor="alarmTime">Set Alarm Time (HH:MM):</label>
//       <input 
//         type="text" 
//         id="alarmTime" 
//         placeholder="Enter alarm time" 
//         value={alarmTime} 
//         onChange={(e) => setAlarmTime(e.target.value)} 
//       />
//       <button onClick={setAlarm}>Set Alarm</button>
//       <p>{status}</p>
//     </div>
//   );
// }

// export default AlarmClock;
