import React from "react";
import "../css/LandingPage.css";
import logo from "../assets/MYtineraryLogo.png";
import searchButton from "../assets/circled-right-2.png";
import { Link } from "react-router-dom";
import CitiesSlider from "../components/CitiesSlider";
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
        <img src={searchButton} id="searchButton" alt="searchButton" />
      </Link>
      <p>Popular MYtineraries</p>
      <CitiesSlider />
    </div>
  );
}
// }
export default LandingPage;
