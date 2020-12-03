import React from 'react';
import PokemonList from './PokemonList';
import TeamListContainer from './TeamListContainer'
export default function TeamProfile(props) {
    const {pokemon, teams} = props;

    return (
        <>
            <div className="ui container green segment">
                <PokemonList pokemon={pokemon} />
                
            </div>
            <div className="ui container blue segment">
                <TeamListContainer teams={teams} />
            </div>
        </>
    )
}