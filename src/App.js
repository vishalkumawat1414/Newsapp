import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Count from './components/Count';
import Fruits from './components/Fruits';
import Notes from './Poject1searchNote/Notes';
import React,{useState} from 'react';
import UseEffectHook from './components/UseEffectHook';
import NewApp from './NewApp/NewApp';
// import Convetor from './convertor/Convetor';




function App() {

 const [countInParent,setcountInParent] = useState(0);

 function updateCountInParent(count){
      setcountInParent(count)
 }

  return (
//    <>
//     {/* <Count/>
//    <Fruits/>  */}
//    {/* <Notes/> */}
//    {/* <p>Inside the parent: {countInParent}</p>
//    <Child1 onCountUpdate = {updateCountInParent} />
//    <Child2  DataInchild2 = {countInParent}  /> */}
//    {/* <UseEffectHook/> */}
            <NewApp /> 
//     {/* <Convetor /> */}


//    </>
    // <>
    //     {/* <CreateNotes/> */}
    //     heyyy
    //     {/* <ListNotes/> */}
    // </>
    // <div>
    //    <NavBar />
    //    <ProductList />
    // </div>
  );
}

export default App;
