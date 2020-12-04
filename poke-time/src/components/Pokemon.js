import React from "react";

export default function Pokemon(props) {
    const {pokemon} = props

    return (
        <span className="ui right aligned container yellow segment cards pokemonCard">
            {pokemon ? (
                <>
                    <a href={pokemon.url}>{pokemon.name}</a>
                    <img src={pokemon.sprite} alt={pokemon.name}></img>
                </>
            ) : (
                <>
                </>
            )}
        </span>
    )
}