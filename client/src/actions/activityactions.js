export const fetchActivities = itineraryid => dispatch => {
  fetch("/activities/" + itineraryid)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "GET_ACTIVITIES",
        payload: result
      });
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
};
