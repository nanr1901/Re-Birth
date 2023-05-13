import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [ans,setAns]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (ans==='64-110')
        {
          navigate('/PageSeven');
        }
        else{
          alert('Try again!');
        }
    }
    return (
      <div className="formDiv">
   
      What's missing?
      <br/>
      <a href="https://www.youtube.com/watch?v=YaRfDcFFtXc" target="_blank">Click here</a>

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