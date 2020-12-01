import React from 'react';
import Friends from './Friends';

export default function FriendsContainer() {
    return (
      <div>
        <h2 className="ui center aligned icon header">
        <i className="circular users icon"></i>
        Friends</h2>
        <Friends />
      </div>
    );
  }

//   this is temporary, testing route