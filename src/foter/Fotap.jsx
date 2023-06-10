import React from 'react'
import Fotapi from './Fotapi'
import "./foter.css"


const Fotap = () => {
    const data = [
        {

        },

        {

        },


        {

        }
    ]


    return (
        <div>


            {
                data.map((itme, index) => (
                    <Fotapi key={index} itme={itme} />
                ))}



        </div>
    )
}

export default Fotap
