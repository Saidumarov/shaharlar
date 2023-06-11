import React, { useState } from 'react';
import "../componets/Nav/nav.css"

const Fotapi = ({ itme }) => {
  const [state, setState] = useState(1)
  function fetchState(index) {
    setState(index)
  }
  const [post, setPost] = useState(false)

  return (
    <div>
      <div className="con">
        <div className="nav">

          <button
            className='tosh'
            onClick={() => fetchState(1)}>
            <h1 >Toshkent</h1>
          </button>
          <button
            className='sam'
            onClick={() => fetchState(2)}>
            <h1>Samarqand</h1>
          </button>
          <button
            className='buk'
            onClick={() => fetchState(3)}>
            <h1>Buxoro</h1>
          </button>

        </div>
      </div>


      <div className={state === 1 ? "content-active" : "content "}>
        <div className="text">
          <div className="blog">
            <h2>{itme.title}</h2>
            <span>{post ? itme.body : itme.body.substring(0, 1020)}</span>
            <span className="span" onClick={() => setPost(!post)}>{post ? "less" : "more..."}</span>
          </div></div></div>
      <div className={state === 2 ? "content-active" : "content "}>
        <div className="text">
          <div className="blog">
            <h2>{itme.title1}</h2>
            <span>{post ? itme.body1 : itme.body1.substring(0, 1020)}</span>
            <span className="span" onClick={() => setPost(!post)}>{post ? "less" : "more..."}</span>
          </div>
        </div>

      </div>
      <div className={state === 3 ? "content-active" : "content "}>
        <div className="text">
          <div className="blog">
            <h2>{itme.title2}</h2>
            <span>{post ? itme.body2 : itme.body2.substring(0, 1020)}</span>
            <span className="span" onClick={() => setPost(!post)}>{post ? "less" : "more..."}</span>
          </div>
        </div>

      </div>
    </div>


  )
}



export default Fotapi 
