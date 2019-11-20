import React from "react";
import "./CreateAccount.css";
import { connect } from "react-redux";
import { fetchNewUser } from "../actions/useractions";
class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      name: "",
      picture: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append("email", this.state.email);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("name", this.state.name);
    formData.append("picture", this.state.picture);
    console.log(formData);
    this.props.fetchNewUser(formData);
  }
  handleInputChangeImage = event => {
    this.setState({ picture: event.target.files[0] });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Password:
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </label>

          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Picture:
            <input
              name="picture"
              type="file"
              onChange={this.handleInputChangeImage}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  value: state.value
});
export default connect(
  mapStateToProps,
  { fetchNewUser }
)(NewAccount);
