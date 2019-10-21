import React from "react";
import "./LandingPage.css";
import logo from "../assets/MYtineraryLogo.png";
import searchButton from "../assets/circled-right-2.png";
import HomeButton from "../assets/homeIcon.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Members from "../components/Myitinerary-projec-team";
// class LandingPage extends React.Component {
//   render() {
function LandingPage(props) {
  return (
    <div>
      <img src={logo} alt="logo" id="logo" />
      <p>
        Find your perfect trip, designed by insiders who know and love their
        cities
      </p>
      <Link to="/cities">
        <img src={searchButton} id="searchButton" />
      </Link>
      <p>Want to build your own MYitenerary?</p>
      <div className="links">
        <a>
          <Link to="/login">Log in</Link>
        </a>
        <a>
          <Link to="/newaccount">Create an account</Link>
        </a>
      </div>
      <Link to="/">
        <img src={HomeButton} id="home" />
      </Link>
    </div>
  );
}
// }
export default LandingPage;
