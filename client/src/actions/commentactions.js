export const fetchComments = itineraryid => dispatch => {
  fetch("/comments/" + itineraryid)
    .then(res => res.json())
    .then(result => {
      dispatch({
        type: "GET_COMMENTS",
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

export const newComment = comment => dispatch => {
  fetch("/comments", {
    headers: {
      "Content-type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: "NEW_COMMENT",
        payload: res
      });
    })
    .catch(error => {
      console.log(error);
    });
};
