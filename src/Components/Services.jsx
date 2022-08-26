import React from 'react'
import Card from './Card'
import data from './data';
function func(val){
  return(
    <Card
    srcimg={val.srcimg}
    title={val.title}
    text={val.text}
    />
  )
}

export default function Services() {
  return (
    <>
       <div className='container-fluid'>
        <div className='row'>
            <div className='col-4 mx-auto  py-auto'>
            {data.map(func)}
      </div>
      </div>
      
      </div>
      </>

  )
}
