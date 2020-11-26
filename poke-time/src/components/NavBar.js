import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <span>
        <Link to="/home">
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
      </span>
    );
  };
  