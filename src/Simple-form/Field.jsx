import React, { useEffect, useRef, useState } from "react";
import Data from "./Data";

const Field = (props) => {

  const [input, setInput] = useState(props.edit? {name :props.edit.name,email:props.edit.email}:{
    name: "",
    email: "",
  });

  const inputRef = useRef(null);
  useEffect(()=>{
    inputRef.current.focus();
  })

  const submit = (e) => {
    e.preventDefault();
    props.submit({
      ...input,
      id:Math.floor(Math.random()*10000)
    });
    setInput({ name: "", email: "" });
  };

  const inputEvent = (e) => {
    const {name,value} = e.target;
    const newdata= {...input}
    newdata[name]=value
    setInput(newdata)
  };


  return (
    <div className="form">
      <form action="" onSubmit={submit}>
      {props.edit?(
        <>
        <div className="inputField">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={input.name}
            onChange={inputEvent}
            ref={inputRef}
          />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={input.email}
            onChange={inputEvent}
          />
        </div>
        <div>
          <button type="submit">update</button>
        </div>
        </>) :
        (
        <>
        <div className="inputField">
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={input.name}
            onChange={inputEvent}
            ref={inputRef}
          />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={input.email}
            onChange={inputEvent}
          />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
        </>)
        }
        
      </form>
    </div>
  );
};

export default Field;
