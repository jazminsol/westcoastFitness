import React from 'react'

function CardBox( {workoutCollection } ) {

    return (
     <div className="card-box"> 
            {workoutCollection.map(workout => 
               <div key={workout.name} className="workout-card">
                   <img className="card-image" alt="workout" src={workout.image} />
                   <hr></hr>
                   <h5>Activity: {workout.name}</h5>
                   <h5>Level: {workout.difficulty}</h5>
                   <h5>Time Spent:{workout.duration}</h5>
               </div>
            )}
        </div>
    )
}

export default CardBox
