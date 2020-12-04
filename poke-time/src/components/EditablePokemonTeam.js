import React, {useLayoutEffect} from "react";
import { useDrop } from "react-dnd";

import DraggablePokemon from "./DraggablePokemon"
import { ItemTypes } from "./Constants";

// Team is:
// {
//    id: 1234,
//    pokemon: [],
//  }

function TeamSlot(props) {

    const {pokemon, onJoin: handleJoin, onLeave: handleLeave} = props

    const [dndProps, drop] = useDrop({
        accept: ItemTypes.POKEMON,
        drop: handleJoin,
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })
    const {isOver} = dndProps

    return (
        <li ref={drop} className="pokemonCard">
            <DraggablePokemon pokemon={pokemon} onDrop={handleLeave} />
        </li>
    )
}

export default function EditablePokemonTeam(props) {

    const {team, updateTeam} = props;

    useLayoutEffect(() => {
        let fullPokemon = []
        if (team.pokemon.length < 6) {
            
            for (let i = 0; i < 6; i++) {
                if(i < team.pokemon.length) {
                    fullPokemon.push(team.pokemon[i])
                } else {
                    fullPokemon.push(null)
                }
            }
        } else if (team.pokemon.length === 6) {
            
        } else {
            fullPokemon = team.pokemon.slice(0, 6)
        }

        updateTeam({
            ...team,
            pokemon: fullPokemon
        })
    }, [team])

    const renderTeamSlot = (pokemon, index) => {

        const handlePokemonJoin = (payload) => {
            const {pokemon} = payload
            let pokemonTeam = [...team.pokemon]
            pokemonTeam[index] = pokemon
            updateTeam({
                ...team,
                pokemon: pokemonTeam,
            })
        }

        const handlePokemonLeft = () => {
            let pokemonTeam = [...team.pokemon]
            pokemonTeam[index] = null
            updateTeam({
                ...team,
                pokemon: pokemonTeam,
            })
        }

        return <TeamSlot key={index} pokemon={pokemon} onJoin={handlePokemonJoin} onLeave={handlePokemonLeft} />
    }

    return (
        <div>
            <h2>Team Name</h2>
            <ul className="tiles">
                {team.pokemon.map(renderTeamSlot)}
            </ul>
        </div>
    )
}