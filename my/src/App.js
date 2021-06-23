import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import NavButton from "./NavButton"
import LoginForm from "./LoginForm"
import WorkoutContainer from "./WorkoutContainer"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route exact path="/workoutcontainer">
          <WorkoutContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


