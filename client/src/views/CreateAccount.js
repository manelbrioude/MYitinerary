import React from "react";
import "./CreateAccount.css";
function NewAccount(props) {
  return (
    <div>
      <form>
        <label>
          Email:
          <input type="text" name="name" />
        </label>

        <label>
          Username:
          <input type="text" name="user" />
        </label>

        <label>
          Password:
          <input type="text" name="password" />
        </label>

        <label>
          Nickname:
          <input type="text" name="nickname" />
        </label>
      </form>
    </div>
  );
}
export default NewAccount;
