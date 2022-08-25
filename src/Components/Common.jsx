import React from 'react';


export default function Common(props) {
  return (
    <div className='parent-div'>
        <div className='text-sec'>
      <h1>{props.head}</h1>
      <p>{props.text}</p>
      <button>{props.btn}</button>
      </div>
      <div className='img-sec'>
        <img src={props.source} alt="" />
      </div>
    </div>
  )
}
