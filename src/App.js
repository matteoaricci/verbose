import React from "react";
import "./App.css";
import Header from './components/Header'
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
      </Switch>
    </>
  );
}

export default App;
