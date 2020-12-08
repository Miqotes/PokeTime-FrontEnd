import React from 'react';
import PokemonList from './PokemonList';
import TeamListContainer from './TeamListContainer';
import FavoritePokemon from './FavoritePokemon';

export default function TeamProfile(props) {
    const {pokemon, teams, updateTeams, favorites, updateFavorite} = props;
    
    return (
        <>
            <div className="ui container green segment scrollbar pos_right">
                <PokemonList pokemon={pokemon} />
                
            </div>
            <div className="ui container blue segment scrollbar pos_right">
                <TeamListContainer teams={teams} updateTeams={updateTeams} />
            </div>
            <div className="ui container red segment scrollbar pos_left">
                <FavoritePokemon favorites={favorites} updateFavorite={updateFavorite}/>
            </div>
        </>
    )
}
