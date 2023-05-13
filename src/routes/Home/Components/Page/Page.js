import React from "react";
import "./Page.css";
import Typewriter from "typewriter-effect";


const Page = () => {
  
  return (
      
      <div className="welcomeText">
        <h1>
          some title text
        </h1>
        <Typewriter options={{
          delay:5 }} onInit={(typewriter) =>{
        typewriter
        .typeString("The sun is broken. The day broke. Anyone touched by rays of sunlight in the visible spectrum is turned into an amorphous mass. They might have sounded human, but they were not. They tried to bring unaffected individuals into the sunlight as well. Last year’s treasure hunt was about finding a bunker at the north pole, the last remaining hope for humanity’s survival. But… you died at the end. This year, however, you will be playing as someone else entirely, someone who’s survived long enough for the anomaly to pass. The sun has stopped its anomalous behavior. Those who were turned into puddles have now vanished entirely. But only a few humans are left. Will you be able to restore humanity?")
        .start();    
     } } 
     />
      </div>
    

  );
};

export default Page;
