import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom/client';


var a = 1;
function DisplayButton() {
    // console.log(useState(10));

    const [initialval, updateVal] = useState(0)   //Array destructuring
    useEffect(() => {
        if (initialval === 0) {

        } else {
            document.title = `messages${initialval}`
        }

    });
    function Num() {
        updateVal(initialval + 1);
    }

    return (
        <div>
            <h1>{initialval}</h1>
            <button onClick={Num}>Increment</button>
        </div>
    )

}

export default DisplayButton;