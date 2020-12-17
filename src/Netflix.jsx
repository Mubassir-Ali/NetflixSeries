import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';


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

