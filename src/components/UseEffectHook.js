import React ,{useEffect , useState} from 'react'

function UseEffectHook() {

    const[count,setCounter] = useState(0);
     
    useEffect(()=>{
        console.log(count ,' count updated')
    },[count])
  
    return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setCounter(count+1)}>Increment</button>
    </div>
  )
}

export default UseEffectHook