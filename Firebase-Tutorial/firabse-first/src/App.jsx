import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getDatabase } from "firebase/database";
import{ app} from './firebase/firebase'
import {  ref, set,get } from "firebase/database";

function App() {
  const db = getDatabase(app);

  //create data
  const CreateData=()=>{
    set(ref(db,'users/102'),{
      id:101,
      name:"Angella Christan",
      age:22,
      email:'angella@gmail.com'
    })
  }

  //get data
  const GetData=()=>{
    get(ref(db,'users/')).then((res)=>{
      console.log(res.val());
   
    })
  }




  return (
    <>
      <button onClick={CreateData}>Create Data</button>
      <button onClick={GetData}>Get Data</button>
    </>
  )
}

export default App
