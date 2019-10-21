import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Members from "./components/Myitinerary-projec-team";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import Login from "./views/Login";
import NewAccount from "./views/CreateAccount";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Link to="/">Home</Link>
        <Link to="/members">Members</Link>

        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/members">
            <Members />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/newaccount">
            <NewAccount />
          </Route>
        </Switch>
      </Router>
    );
    // <Members />;
  }
}

export default App;
