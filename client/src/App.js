import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Members from "./components/Myitinerary-projec-team";
import LandingPage from "./views/LandingPage";
import Cities from "./views/Cities";
import Login from "./views/Login";
import NewAccount from "./views/CreateAccount";
import Itineraries from "./views/itineraries";
import UserMenu from "../src/components/userMenu";
import TemporaryDrawer from "../src/components/sideMenu";
import Favourites from "../src/views/favourites";
import { fetchreloadUser } from "../src/actions/authactions";
import jwtDecode from "jwt-decode";
class App extends React.Component {
  componentDidMount() {
    const token = localStorage.token;
    if (token) {
      const decodedtoken = jwtDecode(token);

      this.props.fetchreloadUser(decodedtoken.id);
    } else {
    }
  }

  render() {
    return (
      <Router>
        <div className="menus">
          <UserMenu user={this.props.user} />

          <TemporaryDrawer />
        </div>
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
          <Route path="/itineraries/:id/:cityname" component={Itineraries} />
          <Route path="/favourites">
            <Favourites />
          </Route>
        </Switch>
      </Router>
    );
    // <Members />;
  }
}
const mapStateToProps = state => ({
  user: state.user,
  token: state.token
});

export default connect(mapStateToProps, { fetchreloadUser })(App);
