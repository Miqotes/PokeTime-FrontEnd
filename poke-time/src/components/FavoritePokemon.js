import React, { useLayoutEffect } from 'react';
import { useDrop } from "react-dnd";

import DraggablePokemon from './DraggablePokemon'
import { ItemTypes } from "./Constants"

function FavoriteSlot(props) {

    const { pokemon, onJoin: handleJoin, onLeave: handleLeave } = props

    const [dndProps, drop] = useDrop({
        accept: ItemTypes.POKEMON,
        drop: handleJoin,
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    })
    const { isOver } = dndProps

    return (
        <li ref={drop} className="pokemonCard">
            <DraggablePokemon pokemon={pokemon} onDrop={handleLeave} />
        </li>
    )
}

export default function EditableFavoritePokemon(props) {

    const { favorite, updateFavorite } = props;

    useLayoutEffect(() => {
        let fullFavoritePokemon = []
        if (favorite.pokemon.length < 50) {

            for (let i = 0; i < 50; i++) {
                if (i < favorite.pokemon.length) {
                    fullFavoritePokemon.push(favorite.pokemon[i])
                } else {
                    fullFavoritePokemon.push(null)
                }
            }
        } else if (favorite.pokemon.length === 50) {

        } else {
                fullFavoritePokemon = favorite.pokemon.slice(0, 50)
        }

        updateFavorite({
            ...favorite,
            pokemon: fullFavoritePokemon
        })
    }, [favorite])

    const renderFavoritePokemon = (pokemon, index) => {

        const handleFavoriteJoin = (payload) => {
            const {pokemon} = payload
            let favoritePokemon = [...favorite.pokemon]
            favoritePokemon[index] = pokemon
            updateFavorite({
                ...favorite,
                pokemon: favoritePokemon,
            })
        }

        const handleFavoriteLeft = () => {
            let favoritePokemon = [...favorite.pokemon]
            favoritePokemon[index] = null
            updateFavorite({
                ...favorite,
                pokemon: favoritePokemon,
            })
        }

        return <FavoriteSlot key={index} pokemon={pokemon} onJoin={handleFavoriteJoin} onLeave={handleFavoriteLeft} />
    }



    return (
        <div>
            <h2>Favorites</h2>
            <ul className="tiles">
                {favorite.pokemon.map(renderFavoritePokemon)}
            </ul>
        </div>
    )
}
