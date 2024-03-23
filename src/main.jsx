import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Task from './components/Task.jsx'
import AlarmClock from './components/Alarm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Task/> */}
    {/* <AlarmClock/> */}
  </React.StrictMode>,
)