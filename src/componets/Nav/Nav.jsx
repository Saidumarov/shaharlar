import React from 'react'
import "./nav.css"
import  '../../foter/Fotapi'
 const Nav = () => {
   
    function tosh() {
    document.querySelector(".fod").style.display = "block"
    document.querySelector(".fod1").style.display = "none"
    document.querySelector(".fod2").style.display = "none"  
    }
    function sam() {
    document.querySelector(".fod").style.display = "none"
    document.querySelector(".fod1").style.display = "block"
    document.querySelector(".fod2").style.display = "none"   
   }
   function buk() {
    document.querySelector(".fod").style.display = "none"
    document.querySelector(".fod1").style.display = "none"
    document.querySelector(".fod2").style.display = "block"   
   }

  return (
    <div>
<div className="con">
    <div className="nav">
        <button className="tosh" onClick={tosh} ><h1>Toshkent</h1></button>
        <button className="sam" onClick={sam}><h1>Samarqand</h1></button>
        <button className="buk" onClick={buk}><h1>Buxoro</h1></button>

    </div>
</div>


    </div>
  )
}

export default Nav
