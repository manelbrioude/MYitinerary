import React from "react";
import { logoutUser } from "../actions/logoutactions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Logout extends React.Component {
  onClickhandle = () => {
    this.props.logoutUser();
    return <Redirect to="/" />;
  };
  render() {
    return <button onClick={this.onClickhandle}>logout</button>;
  }
}

export default connect(
  null,
  { logoutUser }
)(Logout);
