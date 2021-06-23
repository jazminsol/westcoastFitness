import React from 'react'
import Cards from "./Card"


function CardBox( {workoutCollection } ) {

    return (
     <div className="card-box"> 
        <Cards workoutCollection={workoutCollection}/>
     </div>
    )
}

export default CardBox
