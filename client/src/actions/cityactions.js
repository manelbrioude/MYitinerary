export const fetchCities = () => dispatch => {
  fetch("/cities/all")
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "GET_CITIES",
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};
