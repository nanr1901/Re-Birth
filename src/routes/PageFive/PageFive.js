import React from 'react';
import {useNavigate} from "react-router-dom"
import Form from './Form/Form';
  
const PageFive = () => {
  const navigate = useNavigate();
  
  return (
  
     <>
        <Form/>
     </>

  )
};
  
export default PageFive;