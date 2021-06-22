import React, { useState, useEffect } from 'react'

export default function WorkoutContainer() {

    const [workoutSection, setWorkouts] = useState([]);
    useEffect (() => {
        fetch('http://localhost:3000/workouts/')
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(data => setWorkouts(data));
    }, []);
   
    return (
        <div>
            <h1>Welcome back, "user"!</h1>
            {workoutSection.map((workouts) => <div> {workouts.name} </div> )}
    </div>
    )
}