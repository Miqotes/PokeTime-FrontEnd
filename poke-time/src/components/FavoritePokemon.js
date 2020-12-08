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

export default function FavoritePokemon(props) {

    const { favorites, updateFavorite } = props;

    useLayoutEffect(() => {
        let fullFavoritePokemon = []
        if (favorites.length < 50) {

            for (let i = 0; i < 50; i++) {
                if (i < favorites.length) {
                    fullFavoritePokemon.push(favorites[i])
                } else {
                    fullFavoritePokemon.push(null)
                }
            }
        } else if (favorites.length === 50) {
            return;
        } else {
                fullFavoritePokemon = favorites.slice(0, 50)
        }

        updateFavorite(fullFavoritePokemon)
    }, [favorites])

    const renderFavoritePokemon = (pokemon, index) => {

        const handleFavoriteJoin = (payload) => {
            const {pokemon} = payload
            let favoritePokemon = [...favorites]
            favoritePokemon[index] = pokemon
            updateFavorite(favoritePokemon)
        }

        const handleFavoriteLeft = () => {
            let favoritePokemon = [...favorites]
            favoritePokemon[index] = null
            updateFavorite(favoritePokemon)
        }

        return <FavoriteSlot key={index} pokemon={pokemon} onJoin={handleFavoriteJoin} onLeave={handleFavoriteLeft} />
    }

    return (
        <div>
            <h2>Favorites</h2>
            <ul className="tiles">
                {favorites.map(renderFavoritePokemon)}
            </ul>
        </div>
    )
}
