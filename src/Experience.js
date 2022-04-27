// import React,{useState,useEffect} from 'react'

// function Experience() {
//     const [datas,setDatas]=useState([])
//     useEffect(()=>{
//     fetch('https://course-api.com/react-tabs-project').then(response => response.json())
//      .then(data=>setDatas(data))
     
// },[])

//   return (
//       <div>
//   <div class='text-center'>Experience</div>
//   {datas.map(data=><div key={data.id}>
//   <h4 class="d">{data.title}</h4> 
//   </div>
//   )}
//   <div class='slider-btn'>
//       <button class='btn btn-1'>our services</button>
//       <button class='btn btn-2'>get a quote</button>
//   </div>
//   </div>
  
//   )
//   }  

// export default Experience

import React, { useState, useEffect } from "react"; 
import Expcom from "./Expcom"; 
// import './tab.css' 
function T1() { 
  const [datas, setDatas] = useState([]) 
  useEffect(() => { 
    fetch('https://course-api.com/react-tabs-project').then(response => response.json()) 
      .then(data => setDatas(data)) 
  }, []) 
  return ( 
    <div> 
      <div className="h1 text-center"><u>Experience</u></div> 
      <Expcom data={datas} /> 
    </div> 
  ); 
} 
export default T1;