import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Card, Image} from "semantic-ui-react"

function Cards( {workoutCollection } ) {
    return (
     <Card.Group itemsPerRow={4}>
         {workoutCollection.map(workout => 
            <Card key={workout.name}>
                <Image src={workout.image} className="workout-picture"/>
                <Card.Content className="card-bottom">
                    <Card.Header>{workout.name}</Card.Header>
                    <Card.Meta>
                        <span className="duration">Duration: {workout.duration}</span>
                    </Card.Meta>
                    <Card.Description>
                        Challenge Level: {workout.difficulty}
                    </Card.Description>
                </Card.Content>
            </Card>)}
     </Card.Group>
    )
}



/* <Card.Group itemsPerRow={4}>
{workoutCollection.map(workout => 
   <Card key={workout.name}>
       <Image src={workout.image} className="workout-picture"/>
       <Card.Content className="card-bottom">
           <Card.Header>{workout.name}</Card.Header>
           <Card.Meta>
               <span className="duration">Duration: {workout.duration}</span>
           </Card.Meta>
           <Card.Description>
               Challenge Level: {workout.difficulty}
           </Card.Description>
       </Card.Content>
   </Card>)}
</Card.Group> */


            //    <div key={workout.name} className="workout-card">
            //        <img className="card-image" alt="workout" src={workout.image} />
            //        <hr></hr>
            //        <div>
            //        <h5>Activity: {workout.name}</h5>
            //        <h5>Level: {workout.difficulty}</h5>
            //        <h5>Time Spent:{workout.duration}</h5>
            //        </div>
            //        <hr></hr>
            //        <div className="sign-me-up-button">
            //        <button>Sign me up!</button>
            //        </div>
            //    </div>

export default Cards;
