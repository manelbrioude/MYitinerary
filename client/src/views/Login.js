import React from "react";

function Login(props) {
  return (
    <div>
      <form>
        <label>
          Username:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="password" />
        </label>
      </form>
    </div>
  );
}
export default Login;
