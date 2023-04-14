import React from 'react'

const Pstyle = {
    padding : '20px',
     borderRadius:'10px',
     border:'3px solid yellow',

}


function SingleNote(props) {
  return (
    <div style={Pstyle}>
        <p style={{color:'brown'}}>{props.Notes}</p>
    </div>
  )
}

export default SingleNote