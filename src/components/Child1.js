import React, {useState} from 'react'

function Child1(props) {

const[countInChild1,setcountInChild1] = useState(0);

function updatecountInChild1(){
    setcountInChild1(countInChild1+1);
   props.onCountUpdate(countInChild1+1);
} 
     

  return (
    <div> <p> Child1:{countInChild1}</p>
      <button onClick={updatecountInChild1}>Increment:child1</button>
    </div>
  )
}

export default Child1