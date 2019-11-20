import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchActivities } from "../actions/activityactions.js";
import Slider from "react-slick";

class ActivitiesComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      // isLoaded: false
    };
  }
  componentDidMount() {
    this.props.fetchActivities(this.props.itineraryid);
  }
  render() {
    const { activities } = this.props.activities;
    // const { error, isLoaded } = this.state;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false
    };
    return (
      <div className="activities">
        <Slider {...settings}>
          {activities.map(activity => (
            <div key={activity._id} className="activitiestwo">
              <img src={activity.picture} alt="profilepicture" />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activities: state.activities
});
export default connect(
  mapStateToProps,
  { fetchActivities }
)(ActivitiesComp);
