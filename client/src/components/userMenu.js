import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import userIcon from "../assets/userIcon.png";

import { Link } from "react-router-dom";
import Logout from "../components/logout";

function UserMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = props.user;
  console.log(user);
  if (user.user) {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          borders="round"
        >
          <img src={user.user.picture} alt="userIcon" id="userIcon" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <Link to="/">
              <Logout />
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/favourites">Favourites</Link>
          </MenuItem>
        </Menu>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <img src={userIcon} alt="userIcon" id="userIcon" />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/login">
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
          <Link to="/newaccount">
            <MenuItem onClick={handleClose}>Create an Account</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}

export default UserMenu;
