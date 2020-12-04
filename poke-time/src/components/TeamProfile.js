import React, {useState} from 'react';
import PokemonList from './PokemonList';
import TeamListContainer from './TeamListContainer';
import FavoritePokemon from './FavoritePokemon';
import { isFlowBaseAnnotation } from '@babel/types';

export default function TeamProfile(props) {
    const {pokemon, teams} = props;
    
    return (
        <>
            <div className="ui container green segment scrollbar">
                <PokemonList pokemon={pokemon} />
                
            </div>
            <div className="ui container blue segment scrollbar">
                <TeamListContainer teams={teams} />
            </div>
            <div className="ui container red segment">
                <FavoritePokemon />
            </div>
        </>
    )
}
