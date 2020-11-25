import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
      <span>
        <Link to="/home">
          <button className="ui button">Home</button>
        </Link>
        <Link to="/friends">
          <button className="ui button">Friends</button>
        </Link>
        <Link to="/profile">
          <button className="ui button">Profile</button>
        </Link>
      </span>
    );
  };
  