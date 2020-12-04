import React, {useState} from 'react';
import EditablePokemonTeam from "./EditablePokemonTeam";


function createEmptyTeam() {
    return {
        id: -1,
        pokemon: [],
        teamName: "New Team Name",
    }
}

export default function TeamListContainer(props) {
    const [draftTeams, setDraftTeams] = useState(props.teams)

    window.addEventListener('beforeunload', (e) => {
        console.log("WINDOW UNLOADING FOR REFRESH SAVE TEAMS IN HERE")

        return null
    });

    const handleAddTeam = () => {
        const newTeam = createEmptyTeam();
        setDraftTeams([...draftTeams, newTeam])
    }

    const renderPokemonTeam = (team, index) => {
        const updateTeam = (updatedTeam) => {
            let newDraftTeams = [...draftTeams];
            newDraftTeams[index] = updatedTeam;
            setDraftTeams(newDraftTeams)
        }

        return (
            <li className="" key={index}>
                <EditablePokemonTeam team={team} updateTeam={updateTeam} />
            </li>
        )
    }

    return(
        <>
            <ul>
                {draftTeams.map(renderPokemonTeam)}
            </ul>
            <button onClick={handleAddTeam}>+</button>
        </>
    )
}