import React from 'react'

export default function Card(props) {
  return (
    <div>
      <div class="card"  >
  <img class="card-img-top" src={props.srcimg} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.text}.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}
