import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [ans,setAns]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (ans==='code')
        {
          navigate('/PageSix');
        }
        else{
          alert('Try again!');
        }
    }
    return (
      <div className="formDiv">
   
      What's the access code?
      <br/>
      <a href="https://www.youtube.com/watch?v=2e_8DfyuFZY" target="_blank">Click here</a>

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