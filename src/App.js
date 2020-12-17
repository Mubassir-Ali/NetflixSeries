import React from 'react';
import Cards from './Cards';
import Sdata from './Sdata';

const App=()=>(
    
    <>
        <h1>List of Top 5 Netflix Original Series</h1>
    
        {Sdata.map((val, index)=>{
          console.log(index);
          
            return(
            <Cards
                key={val.id}
                imgsrc={val.imgsrc}
                title={val.title}
                sname={val.sname}
                link={val.link}
            />
            );
        
        })}
    </> 
    
)

export default App;