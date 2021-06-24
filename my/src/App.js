import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
// import NavButton from "./NavButton"
import LoginForm from "./LoginForm"
import MainPage from "./MainPage";
import CardBox from "./CardBox";

function App() {

  const [workoutCollection, setWorkoutCollection] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/workouts`)
    .then(res => res.json())
    .then(workoutData => setWorkoutCollection(workoutData))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/main-page">
          <MainPage />
        </Route>
        <Route exact path="/available-workouts">
          <CardBox workoutCollection={workoutCollection}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


