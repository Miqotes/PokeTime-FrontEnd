import React, {useState} from 'react';

import SearchBar from './SearchBar';
import Pokemon from './Pokemon';

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
            <li key={index}>
                <Pokemon pokemon={pokemon} />
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
