import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <h1>This is the homepage</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
