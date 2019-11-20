export const fetchItineraries = cityid => dispatch => {
  fetch("/itineraries/" + cityid)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "GET_ITINERARIES",
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};
