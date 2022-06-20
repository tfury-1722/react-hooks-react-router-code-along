import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div>
      <Switch>
        <NavBar />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
