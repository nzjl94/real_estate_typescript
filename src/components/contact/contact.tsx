"use client";

import React, { useState, useEffect} from "react";

import {getAPIData} from '../../utility/API';
import HEADER from "../ui/HEADER"



export default () => {
//   const [data, setData] = useState({title:"",content:"",url:""})



  useEffect( () => {
    // getAPIData('about_start',setData)
  }, [])
  return (
    <HEADER 
        title="Get in Touch with Estatein" 
        content="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation." 
    />
  );
};