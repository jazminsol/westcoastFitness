import React, { useState, useEffect } from 'react'
import CardBox from "./CardBox"
import UpcomingList from "./UpcomingList"
import CompletedWorkouts from './CompletedWorkouts'

export default function WorkoutContainer() {

    const [workoutCollection, setWorkoutCollection] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/workouts`)
        .then(res => res.json())
        .then(workoutData => setWorkoutCollection(workoutData))
    }, [])

    return (
        <div className="workoutContainer">
            <h1>Welcome, user!</h1>
            <CardBox workoutCollection={workoutCollection}/>
            <UpcomingList />
            <CompletedWorkouts />
        </div>
    )
}