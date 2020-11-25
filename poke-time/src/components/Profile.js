import React from 'react';
import PokemonList from './PokemonList';
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
        <div>
            <PokemonList pokemon={props.pokemon} />
        </div>
    )
}
