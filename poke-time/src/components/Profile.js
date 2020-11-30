import React from 'react';
import PokemonList from './PokemonList';
import UserBioComponent from './UserBioComponent'
import SideBar from './SideBar'
// function Profile() {
//     return (
//       <div>
//         <h2>Profile</h2>
//       </div>
//     );
//   }

  // Testing route
export default function Profile(props) {
    return (
        <div className="container">
            <SideBar user={props.user} />
            {/* <UserBioComponent user={props.user} /> */}
            <PokemonList pokemon={props.pokemon} />
        </div>
    )
}

// need to create form within another component, and add here! 
// This is the container for the profile!
// going to want to import that container
// make sure its exported
