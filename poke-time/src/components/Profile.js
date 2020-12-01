import React from 'react';
import PokemonList from './PokemonList';
import UserBioComponent from './UserBioComponent'
import SideBar from './SideBar'

  // Testing route
export default function Profile(props) {
    return (
        <>
            <div className="left aligned column">
            {/* <span className="ui vertical stripe segment verticalBox"> */}
            <UserBioComponent user={props.user} />
            {/* </span>  */}
            </div>
        </>
    )
}

// need to create form within another component, and add here! 
// This is the container for the profile!
// going to want to import that container
// make sure its exported
