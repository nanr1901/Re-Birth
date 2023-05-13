import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [ans,setAns]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (ans==='keybehindrocks')
        {
          navigate('/PageThree');
        }
        else{
          alert('Try again!');
        }
    }
    return (
      <div className="formDiv">
   
      Welcome to site 19!
      <br/>
      _ _ _  &nbsp;  _ _ _ _ _ _  &nbsp; _ _ _ _ _<br/>
      <a href="https://www.youtube.com/watch?v=Q-qeg_CCS3U" target="_blank">Click here</a>

         <form onSubmit={handleSubmit}>
            <label>Enter answer:
            <input type="text" value={ans}
            onChange={(e)=>setAns(e.target.value)} />
        </label>
        <input type="submit"/>
         </form>    
         </div>
    )
  }

export default Form;