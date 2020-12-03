import React, {useState, useLayoutEffect} from "react";

import Pokemon from "./Pokemon"

function renderTeamSlot(pokemon, index) {
    return (
        <li className="">
            <Pokemon pokemon={pokemon} />
        </li>
    )
}

// Team is:
// {
//    id: 1234,
//    pokemon: [],
//  }

export default function EditablePokemonTeam(props) {
    const [draftTeam, setDraftTeam] = useState(props.team)

    useLayoutEffect(() => {
        let fullPokemon = []
        if (draftTeam.pokemon.length < 6) {
            
            for (let i = 0; i < 6; i++) {
                if(i < draftTeam.pokemon.length) {
                    fullPokemon.push(draftTeam.pokemon[i])
                } else {
                    fullPokemon.push(null)
                }
            }
        } else if (draftTeam.pokemon.length === 6) {
            return;
        } else {
            fullPokemon = draftTeam.pokemon.slice(0, 6)
        }

        setDraftTeam({
            ...draftTeam,
            pokemon: fullPokemon,
        })
    }, [draftTeam])

    return (
        <div>
            <h2>Team Name</h2>
            <ul className="tiles">
                {draftTeam.pokemon.map(renderTeamSlot)}
            </ul>
        </div>
    )
}