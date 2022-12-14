import React from 'react';


export default function Common(props) {
  return (
    <div className='parent-div'>
        <div className='text-sec'>
      <h1>{props.head}</h1>
      <span><strong><h2 id='blue-text'>{props.name}</h2></strong></span>
      <p>{props.text}</p>
      <button>{props.btn}</button>
      </div>
      <div className='second-div'>
        <img id='header-img' src={props.source} alt="" />
      </div>
    </div>
  )
}
