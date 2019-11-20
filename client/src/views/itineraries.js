import React from "react";

import HomeButton from "../assets/homeIcon.png";
import ItineraryStructure from "../components/itinerarycomponent";
import { connect } from "react-redux";
import { fetchItineraries } from "../actions/itineraryActions";
import { Link } from "react-router-dom";

class itineraries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      selectedItinerary: ""
    };
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.id);
  }
  handleChange = e => {
    this.setState({ itineraryFilter: e.target.value });
  };
  changeSelectedItinerary = itineraryid => {
    this.setState({ selectedItinerary: itineraryid });
  };

  render() {
    const { itineraries } = this.props.itineraries;
    const cityname = this.props.match.params.cityname;

    const { error } = this.state;

    if (itineraries.length === 0) {
      return (
        <div className="itineraries">
          <h1>{cityname}</h1>
          <div>
            <p>loading...</p>
          </div>
          <div className="itinerariesLinks">
            <Link to="/cities" className="OtherCities">
              <p>Choose another city</p>
            </Link>
            <Link to="/">
              <img src={HomeButton} id="home" alt="home" />
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="itineraries">
          <h1>{cityname}</h1>

          <ul className="listOfItineraries">
            <li className="scrollbox">
              {itineraries.map((itinerary, index) => (
                <ItineraryStructure
                  key={index}
                  className="itinerary.index"
                  itinerary={itinerary}
                  selectedItinerary={this.state.selectedItinerary}
                  changeSelectedItinerary={this.changeSelectedItinerary}
                />
              ))}
            </li>
          </ul>

          <div>
            <Link to="/cities">
              <p>Choose another city</p>
            </Link>
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
    itineraries: state.itineraries,
    cityid: state.cityid
  };
};
export default connect(mapStateToProps, { fetchItineraries })(itineraries);
