import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchComments, newComment } from "../actions/commentactions.js";

class CommentsComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      isLoaded: "",
      comment: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.itineraryid);
    console.log(this.props.itineraryid);
  }
  handleInputChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }
  onSendMessage = event => {
    event.preventDefault();
    this.inputTitle.value = "";
    let comment = {
      comment: this.state.comment,
      user: this.props.user.user.username,
      itineraryid: this.props.itineraryid,
      userpicture: this.props.user.user.picture
    };
    this.props.newComment(comment);
  };

  render() {
    const { comments } = this.props.comments;
    console.log(this.props);
    // const { error, isLoaded } = this.state;

    return (
      <div className="all comments">
        {this.props.user.user ? (
          <div>
            {comments.map(comment => (
              <div key={comment._id} className="comments">
                <div>
                  <div className="userComment">
                    <img src={comment.userpicture} alt="userpicture" />
                    {comment.user}
                  </div>
                  <div>
                    <div className="Comment">{comment.comment}</div>
                  </div>
                </div>
              </div>
            ))}
            <form>
              <label>
                <input
                  ref={el => (this.inputTitle = el)}
                  name="comment"
                  type="text"
                  placeholder="write a message"
                  value={this.state.comment}
                  onChange={this.handleInputChange}
                />
              </label>
              <button onClick={this.onSendMessage}>Send</button>
            </form>
          </div>
        ) : (
          <p>
            Please <Link to="/login">login</Link> to read and add comments
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  user: state.user
});
export default connect(mapStateToProps, { fetchComments, newComment })(
  CommentsComp
);
