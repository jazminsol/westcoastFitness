import React from 'react'

function Card( {workoutCollection } ) {
    return (
        <div className="card-collection">
            {workoutCollection.map(workout => 
               <div key={workout.name} className="workout-card">
                   <img className="card-image" alt="workout" src={workout.image} />
                   <hr></hr>
                   <div>
                   <h5>Activity: {workout.name}</h5>
                   <h5>Level: {workout.difficulty}</h5>
                   <h5>Time Spent:{workout.duration}</h5>
                   </div>
                   <hr></hr>
                   <div className="sign-me-up-button">
                   <button>Sign me up!</button>
                   </div>
               </div>
            )}
        </div>
    )
}

export default Card;
