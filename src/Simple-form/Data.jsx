import React, { useState } from "react";
import Field from "./Field";

const Data = ({ data ,remove,update}) => {

  const [edit ,setEdit]=useState({
    id : null,
    name : '',
    email :'',
  })

  const submitUpdate=(value)=>{
    update(edit.id,value);
    setEdit({
      id : null,
      name : '',
      email :'',
    })
    }


if(edit.id){
  return <Field edit={edit} submit={submitUpdate} />
}


  


  return data.map((data, index) => 
    (<>
      <div onSubmit={update} key ={data.id} className="inside">
        <div id={data.id} className="input_Box">
          <input 
          type="text" 
          name="name" 
          value={data.name}
          id='name'
          />
          
          <input 
          type="text" 
          name="email" 
          value={data.email}
          id ='email'
          />
          
        </div>
        <div className="button_box">
          <button onClick={()=>setEdit({id:data.id,name:data.name,email:data.email})}  className="one">Edit</button>
          <button onClick={()=> remove(data.id)} className="three">Delete</button>
        </div>
      </div>
    </>)
  );
};

export default Data;
