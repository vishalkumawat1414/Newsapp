import React, { useState } from 'react'


function Fruits() {
 
    const [fruit ,setFruit] = useState("orange");
    const [input ,setInput] = useState("");

   const Update = () =>{
       setFruit(input)
   }

    function TextInput(event){
        let msg = event.target.value;
        setInput(msg)
    }
    
  return (
    <>
        <p>The Fruit is :{fruit}</p>
        <input type="text" onChange={TextInput} />
        {/* <button onClick={()=>{setFruit("Apple")}}>Apple</button>
        <button onClick={()=>{setFruit('Papaya')}}>Papaya</button> */}
        <button onClick={Update}>Submit</button>
    </>
  )
}

export default Fruits