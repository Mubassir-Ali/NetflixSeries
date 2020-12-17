import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './Cards';
import Sdata from './Sdata';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <h1>List of Top 5 Netflix Original Series</h1>
    
    {Sdata.map(function(val){
      return(<Cards
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
    
      />
    );
    })}



  </React.Fragment>,
document.getElementById('root'));
