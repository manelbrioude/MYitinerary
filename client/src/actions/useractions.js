export const fetchNewUser = formData => dispatch => {
  console.log(formData);
  fetch("/users", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "CREATE_USER",
        payload: result
      });
    })
    .catch(error => {
      console.log(error);
    });
};
