import React from "react";
import EditablePokemonTeam from './EditablePokemonTeam'

export default function Pokemon(props) {
    const {pokemon} = props

   const addToTeam = () => {
    // click + to add pokemon to editable team container
    console.log(pokemon.props)
    }

    return (
        <span className="ui right aligned container yellow segment cards">
            {pokemon ? (
                <>
                    <a href={pokemon.url}>{pokemon.name}</a>
                    <img src={pokemon.sprite} alt={pokemon.name}></img>
                    <button onclick={addToTeam}>+</button>
                </>
            ) : (
                <>
                </>
            )}
        </span>
    )
}