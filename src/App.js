import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Chat />
          </Route>
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
