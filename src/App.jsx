import React, { useState } from 'react';
import db from './db';
import './index.css';
function App() {
    let [data,setData]=useState(db);
    return (
       <div id="body">
         <div id="conatiner">
            <h1 style={{textAlign:"center", paddingBottom:"10px",color:"white"}}>{data.length} birthdays today</h1>
            {data.map((x, index) => {
                return (
                    <div key={index} id="main">
                      
                       <img src={x.img} alt="images" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                      
                     <ruby style={{color:"white" , fontSize:"6vh",fontFamily:"arial-bold"}}>
                    {x.Name} <rt>{x.Age}</rt>
                     </ruby>
                  
                    </div>
                    
                );
            })}
            <button onClick={()=>setData([])}>Clear All</button>
        </div>
       </div>
    );
}

export default App;
