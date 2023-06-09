import React, { useState } from 'react'
import "./foter.css"

const Fotapi = ({ itme }) => {
  const [state, setState] = useState(false)
  return (
    <div>
    <div className="blog">
      <h2>{itme.title}</h2>
    <span className='text'>{state ? itme.body : itme.body.substring(0, 1200)}</span>
      <span className='span' onClick={() => setState(!state)}>{state ? "less." : "more..."} </span>
    </div>
    </div>
  )
}

export default Fotapi
