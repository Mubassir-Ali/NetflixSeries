import React from 'react';
import ReactDOM from 'react-dom';
import Sdata from './Sdata';
import './index.css';
import App from './App'

const nfSeries =[];
const azSeries=[];

Sdata.map(function(val,index,arr){
  if(val.title=="A Netflix Original Series"){
    return (
      nfSeries.push(index)
    )
  }

  else{
    return(
      azSeries.push(index)
    )
  }
 ;
})

console.log(azSeries);

ReactDOM.render(<App/>,document.getElementById('root'));
