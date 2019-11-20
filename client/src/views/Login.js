import React from "react";
import { fetchLoginUser } from "../actions/loginactions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onhandleclick = this.onhandleclick.bind(this);
  }
  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
    console.log(name);
    console.log(value);
  }

  onhandleclick() {
    alert("You are login");
    this.props.fetchLoginUser(this.state);
  }
  renderRedirect = () => {
    if (this.props.user.user) {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <form>
          <label>
            EMAIL:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            PASSWORD:
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>
        </form>

        <button type="btn" name="login" onClick={this.onhandleclick}>
          login
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value,
  user: state.user
});
export default connect(
  mapStateToProps,
  { fetchLoginUser }
)(Login);
