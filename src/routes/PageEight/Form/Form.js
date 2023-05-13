import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [ans,setAns]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (ans==='machine')
        {
          navigate('/PageNine');
        }
        else{
          alert('Try again!');
        }
    }
    return (
      <div className="formDiv">
   
      How do you activate the machinery?
      <br/>
      <a href="https://youtu.be/l15XCr3Stgo" target="_blank">Click here</a>

         <form onSubmit={handleSubmit}>
            <label>Enter the answer:
            <input type="text" value={ans}
            onChange={(e)=>setAns(e.target.value)} />
        </label>
        <input type="submit"/>
         </form>    
         </div>
    )
  }

export default Form;