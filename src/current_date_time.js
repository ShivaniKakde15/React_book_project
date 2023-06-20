// 2) create a react app to display current date and Time.
import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function TimePicker() {
    const date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();

    const [ctime, setTime] = useState(time);  //usestate is responsible for update the time on runtime and setTime is a callback function.

    const refreshTime = () => {
        time = new Date().toLocaleTimeString();  //time variable reintialize
        setTime(time)    //update time
    }

    setInterval(refreshTime, 1000)    //setInterval calls a fun at specified intervals (in millisec).


    return (
        <center>
        <div className='bg-danger mt-5'>
            <h1>Current Date: {date}</h1><br/>
            <h1>Current Time: {time}</h1>
        </div>
        </center>
    );
}

export default TimePicker;