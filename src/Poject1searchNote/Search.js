import React ,{useState} from 'react'

function Search(props) {
    const[searchTerm,setSearchTerm]=useState("")
  return (
    <>
         <input type="text"
            placeholder='Search here'
            onChange={(event)=>{
                setSearchTerm(event.target.value);
            }}
            />
        {
            props.notes.filter((val)=>{
                if(searchTerm==""){
                    return val
                }else if(val.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val;
                }
            })
        }
            
    </>
  )
}

export default Search