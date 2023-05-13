import React from 'react';
import './Form.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form () {
    const [ans,setAns]=useState('');
    const navigate=useNavigate();
    const handleSubmit=(event)=>{
        event.preventDefault();
        if (ans==='michigan' || ans=='MICHIGAN' || ans=='Michigan')
        {
          navigate('/PageTwo');
        }
        else{
          alert('Try again!');
        }
    }
    return (
      <div className="formDiv">
         <form onSubmit={handleSubmit}>
            <label>Enter answer:
            <input type="text" value={ans}
            onChange={(e)=>setAns(e.target.value)} />
        </label>
        <input type="submit" value="Godspeed"/>
         </form>    
         <a href="https://www.youtube.com/watch?v=nE1MmbwO2C8" target="_blank">Don't come any closer</a>
         </div>
    )
  }

export default Form;