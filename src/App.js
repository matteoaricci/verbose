import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Switch>
          <Route exact path="/"></Route>
          {/* Chat */}
        </Switch>
      </AppBody>
    </>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
