export const fetchreloadUser = data => dispatch => {
  fetch("/users/auth/" + data, {
    method: "POST"
  })
    .then(res => res.json())
    .then(result => {
      console.log(result);
      dispatch({
        type: "REFRESH_USER",
        payload: result
      });
    })
    .catch(error => {
      // console.log(error);
    });
};
