import React from 'react';


function Form () {
  const date = new Date();
  const showTime = date.getHours() 
      + ':' + date.getMinutes() 
      + ":" + date.getSeconds();
    return (
      <div className="formDiv">
   
      The end?
      <br/>
      <a href="https://youtu.be/YsEUPGCvJ3c" target="_blank">Click here</a> 
         <p>
          You finished at {showTime}
         </p>
         </div>
    )
  }

export default Form;