import React, { useState, useEffect } from 'react'
import CardBox from "./CardBox"

export default function WorkoutContainer() {

    const [workoutCollection, setWorkoutCollection] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/workouts`)
        .then(res => res.json())
        .then(workoutData => setWorkoutCollection(workoutData))
    }, [])

    return (
        <div>
            <h1>Welcome, user!</h1>
            <CardBox workoutCollection={workoutCollection}/>
        </div>
    )
}