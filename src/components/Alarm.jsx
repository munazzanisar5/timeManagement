import React, { useState } from 'react';

function AlarmClock() {
  const [alarmTime, setAlarmTime] = useState('');
  const [status, setStatus] = useState('');

  // Function to check the current time and trigger alarm if it matches
  function checkAlarm() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

   
    const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);

    if (hours === alarmHours && minutes === alarmMinutes) {
      alert("Alarm! Wake up!");
      setStatus(`Alarm triggered at ${alarmTime}`);
    }
  }

  // Function to set the alarm time
  function setAlarm() {
    if (alarmTime) {
      setInterval(checkAlarm, 1000);
      setStatus(`Alarm is set for ${alarmTime}`);
    } else {
      alert("Please enter a valid alarm time.");
    }
  }

  return (
    <div>
      <h2>Simple Alarm Clock</h2>
      <label htmlFor="alarmTime">Set Alarm Time (HH:MM):</label>
      <input 
        type="text" 
        id="alarmTime" 
        placeholder="Enter alarm time" 
        value={alarmTime} 
        onChange={(e) => setAlarmTime(e.target.value)} 
      />
      <button onClick={setAlarm}>Set Alarm</button>
      <p>{status}</p>
    </div>
  );
}

export default AlarmClock;
