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
          <button className="">Home</button>
        </Link>
        <div class="divider"/>
        <Link to="/profile">
          <button className="">Profile</button>
        </Link>
        <div class="divider"/>
        <Link to="team_lists">
          <button className="">Teams</button>
        </Link>
        <div class="divider"/>
        <Link to="/friends">
          <button className="">Friends</button>
        </Link>
        <div class="divider"/>
        <Link to="/login">
          <button className="" onClick={handleSignOut}>Sign Out</button>
        </Link>
      </span>
    );
  };
  