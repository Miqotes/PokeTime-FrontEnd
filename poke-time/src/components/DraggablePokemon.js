import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants"
import Pokemon from "./Pokemon"

export default function DraggablePokemon(props) {
    const {pokemon, onPickup, onDrop} = props

    const [_dndProps, drag] = useDrag({
        item: { 
            type: ItemTypes.POKEMON,
            pokemon: props.pokemon,
        },
        begin: () => onPickup && onPickup({pokemon: props.pokemon}),
        end: (item) => onDrop && onDrop(item)
    })

    return (
        <div ref={drag}>
            <Pokemon pokemon={pokemon} />
        </div>
    )
}