import React, { useState } from 'react'
import SingleNote from './SingleNote';
import Search from './Search';

function Notes() {

 const [note ,setNote] = useState([]);
 const [curNote,setCurnote] = useState("");

 
  function AddNote(event){
    setCurnote( event.target.value);
  }

  function Noteit(){
      const newNoteArray = [...note,curNote];
      setNote(newNoteArray)
  }

  const ulStyle ={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    listStyle:'none',
    gap:'10px'

  }


 
  

  return (
    <>
    {/* passing array of notes to search comp */}
     {/* <Search notes={Notes}/> */}

     <input type="text" onChange={AddNote} />
     <button onClick={Noteit}>Note It!</button>
     <ul style={ulStyle}>
        {
            note.map((Notes,index)=>{
                return <li key = {index}> 
                <SingleNote Notes= {Notes}/>
                </li>
            })
        }
     </ul>
    </>
  )
}

export default Notes