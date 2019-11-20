export const fetchLoginUser = data => dispatch => {
  fetch("/users/auth", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "LOGIN_USER",
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};
