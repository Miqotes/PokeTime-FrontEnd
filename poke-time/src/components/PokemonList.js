import React, {useState} from 'react';

import SearchBar from './SearchBar';

export default function PokemonList({pokemon}) {
    const [visiblePokemon, setVisiblePokemon] = useState(pokemon);

    const handleSearchUpdate = (term) => {
        setVisiblePokemon(pokemon.filter(
            p => p.name.toLowerCase().includes(term)
        ))
    }


    // Shadowing the above pokemon (plural) with pokemon (singular)
    const renderSinglePokemon = (pokemon, index) => {
        return (
            <li className="ui right aligned container yellow segment cards" key={index}>
                <span className="">
                    <a href={pokemon.url}>{pokemon.name}</a>
                    <img src={pokemon.sprite}></img>
                </span>
            </li>
        )
    };

    return (
        <div className="">
            <SearchBar onChange={handleSearchUpdate} />
            <ul className="tiles ">
                {visiblePokemon.map(renderSinglePokemon)}
            </ul>
        </div>
    )
}
