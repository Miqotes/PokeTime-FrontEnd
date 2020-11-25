import React from 'react';

export default function PokemonList({pokemon}) {
    if (!pokemon) return null; // do nothing if we're given nothing


    // Shadowing the above pokemon (plural) with pokemon (singular)
    const renderSinglePokemon = (pokemon, index) => {
        return (
            <li key={index}>
                <span>
                    <a href={pokemon.url}>{pokemon.name}</a>
                </span>
            </li>
        )
    };

    return (
        <div>
            <ul>
                {pokemon.map(renderSinglePokemon)}
            </ul>
        </div>
    )
}