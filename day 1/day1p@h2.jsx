import React from 'react';
function Practice()
{
   let age=18;
   let name="kiran";
   let setStatus=false;
   let userDefault=undefined;
   let responseValue=null;
   console.log(age);
   console.log(name);
   console.log(setStatus);
   console.log(userDefault);
   console.log(responseValue);
   age=25;
   let oldage=age;
   setStatus=true;
   let status=setStatus;
   console.log(oldage);
   console.log(status); 
   alert("Check the console output");
}
const Palce=()=>{
    return(
        <div>
            <h1>Primitive Data Types copy the values</h1>
            <button onClick={Practice}>Primitive Data Types and call the function</button>
        </div>
    );
};
export default Palce;