import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from "react-router-dom";
import "./App.css";
import About from "../containers/AboutContainer/About";
import NotFound from "../containers/NotFound/NotFound";
import AllIssues from "../containers/IssuesList/AllIssues";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavLink activeClassName="active" exact to="/about">
            About
          </NavLink>
          &nbsp;
          <NavLink activeClassName="active" exact to="/issues">
            Issues
          </NavLink>
        </header>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/issues" component={AllIssues} />
          <Redirect from="/" to="/issues" />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
