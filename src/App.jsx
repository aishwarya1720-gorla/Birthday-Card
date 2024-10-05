import React, { useState } from 'react';
import './index.css';
function App() {
    
    return (
       <div id="body">
         <div id="conatiner">
            <h3 style={{textAlign:"center", paddingBottom:"10px",color:"white"}}>{data.length} Birthdays Today</h3>
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
