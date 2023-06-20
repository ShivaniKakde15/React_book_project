// 1.) Create a button to display ON/OFF using hooks.

import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function ButtonToggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <center>
        <h1>{isOn ? 'ON' : 'OFF'}</h1>
    <button class="btn btn-primary" onClick={handleClick}>Click On Button</button>
    </center>
  );
}

export default ButtonToggle;
