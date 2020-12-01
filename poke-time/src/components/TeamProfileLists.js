import React from 'react';
import PokemonList from './PokemonList';

export default function TeamProfile(props) {
    return (
        <div className="ui left container segment">
            {/* <SideBar user={props.user} /> */}
            <PokemonList pokemon={props.pokemon} />
        </div>
    )
}