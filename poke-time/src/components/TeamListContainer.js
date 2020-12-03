import React from 'react';
import EditablePokemonTeam from "./EditablePokemonTeam";

function renderPokemonTeam(team, index) {
    return (
        <li className="tiles" key={index}>
            <EditablePokemonTeam team={team} />
        </li>
    )
}

export default function TeamListContainer(props) {
    const {teams} = props;

    return(
        <ul>
            {teams.map(renderPokemonTeam)}
        </ul>
    )
}