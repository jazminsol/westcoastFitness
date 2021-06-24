import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
// import NavButton from "./NavButton"
import LoginForm from "./LoginForm"
import MainPage from "./MainPage";
import CardBox from "./CardBox";
import CompletedWorkouts from "./CompletedWorkouts"
// import NavBar from "./NavBar"

function App() {

  const [workoutCollection, setWorkoutCollection] = useState([])
  const [filteredWorkoutCollection, setFilteredWorkoutCollection] = useState([])

  const [completedWorkouts, setCompletedWorkouts] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/workouts`)
    .then(res => res.json())
    .then(workoutData => {
      setWorkoutCollection(workoutData)
      setFilteredWorkoutCollection(workoutData)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/completed-workouts`)
    .then(res => res.json())
    .then(completedWorkoutData => setCompletedWorkouts(completedWorkoutData))
  }, [])

  const addWorkout = (newWorkout) => {
    setCompletedWorkouts([...completedWorkouts, newWorkout])
  }

  const searchWorkouts = (searchTerm) => {
    return setFilteredWorkoutCollection(workoutCollection.filter(workout => workout.difficulty.includes(searchTerm)))
  }

  return (
    <div className="App">
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/main-page">
          <MainPage addWorkout={addWorkout}/>
        </Route>
        <Route exact path="/available-workouts">
          <CardBox searchWorkouts={searchWorkouts} filteredWorkoutCollection={filteredWorkoutCollection}/>
        </Route>
        <Route exact path="/completed-workouts">
          <CompletedWorkouts completedWorkouts={completedWorkouts}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


