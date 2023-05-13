import React from "react";
import "./Home.css";
import Page from "./Components/Page/Page";
import Form from './Components/Form/Form';


const Home=()=>
{
    return(
        <div className="master">
        <Page/>
        <Form/>
        </div>

    );
}

export default Home;