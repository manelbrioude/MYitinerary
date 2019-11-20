import React from "react";
import "../css/Cities.css";
import HomeButton from "../assets/homeIcon.png";
import { connect } from "react-redux";
import { fetchCities } from "../actions/cityactions";
import { Link } from "react-router-dom";
class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      cityFilter: ""
    };
  }

  componentDidMount() {
    this.props.fetchCities();
  }
  handleChange = e => {
    this.setState({ cityFilter: e.target.value });
  };

  render() {
    const { cities } = this.props.cities;
    const { error } = this.state;
    let filteredCities = cities.filter(city => {
      let cityName = city.city.toLowerCase();

      return cityName.startsWith(this.state.cityFilter) === true;
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (cities.length === 0) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="cities">
            <h1>CITIES</h1>
            <label htmlFor="filter">
              Filter by Name
              <input
                type="text"
                id="filter"
                value={this.state.cityFilter}
                onChange={this.handleChange}
              />
            </label>

            <ul className="listOfCities">
              {filteredCities.map((city, index) => (
                <Link to={"/itineraries/" + city._id + "/" + city.city}>
                  <li key={cities._id}>
                    {city.city},{city.country}
                  </li>
                </Link>
              ))}
            </ul>
            <Link to="/">
              <img src={HomeButton} id="home" alt="home" />
            </Link>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};
export default connect(mapStateToProps, { fetchCities })(Cities);
