import React from 'react';
import {useNavigate} from "react-router-dom"
import Form from './Form/Form';
  
const PageThree = () => {
  const navigate = useNavigate();
  
  return (
  
     <>
        <Form/>
     </>

  )
};
  
export default PageThree;