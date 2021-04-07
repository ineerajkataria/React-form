import React, { useState } from "react";
import Data from "./Simple-form/Data";
import Navbar from "./Simple-form/Navbar";
import Field from "./Simple-form/Field";

const Form = () => {

 const [data,setData]=useState([])

//  .........add data.....................

 const submit=(input)=>{
   if(!input.email || !input.name || /^\s+$/.test(input.email) || /^\s+$/.test(input.name)){
     return;
   }

  const mydata = [input,...data];
  setData(mydata);
  // console.log(mydata);
 }

// ........remove data..........................

const remove =(id)=>{
  const rest = [...data].filter((data)=> data.id !== id);
  setData(rest);
  console.log(rest);
}

// ........UPDATE DATA...................
const update =(editID,newValue)=>{
  if(!newValue.email || !newValue.name || /^\s+$/.test(newValue.email) || /^\s+$/.test(newValue.name)){
    return;
  }
  
  setData(prev => prev.map(item => (item.id === editID)? newValue:item))
}

  return (
    <>
      <Navbar />
      <Field submit ={submit}/>
      <div id="output">
      <Data 
      data = {data}
      remove ={remove}
      update={update}
      />
      </div>
    </>
  );
};

export default Form;
