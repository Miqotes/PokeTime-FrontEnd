import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

  const handleSignOut = () => {
    localStorage.removeItem("token")
    props.clearUser()
  }
    return (
      <span>
        <Link to="/">
          <button className="ui button">Home</button>
        </Link>
        <div class="divider"/>
        <Link to="/friends">
          <button className="ui button">Friends</button>
        </Link>
        <div class="divider"/>
        <Link to="/profile">
          <button className="ui button">Profile</button>
        </Link>
        <Link to="/">
          <button className="ui button" onClick={handleSignOut}>Sign Out</button>
        </Link>
      </span>
    );
  };
  