import React from 'react';
function alertMsg()
{
    alert("Message from Javascript Alert!");
    console.log("Message to developer");
}
const Message = ()=>{
    return(
        <div>
                <h1>Let we see the output of JAVASCRIPT</h1>
                <button onClick={alertMsg}>Button</button>
        </div>
    );
};
export default Message;