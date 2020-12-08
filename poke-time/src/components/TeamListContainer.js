import React from 'react';
import EditablePokemonTeam from "./EditablePokemonTeam";


function createEmptyTeam() {
    return {
        id: -1,
        pokemon: [null, null, null, null, null, null],
        teamName: "New Team Name",
    }
}



export default function TeamListContainer(props) {
    const {updateTeams, teams, id} = props


    const handleAddTeam = () => {
        const newTeam = createEmptyTeam();
        updateTeams([...teams, newTeam])
    }

    const deleteTeam = (team) => {
        const token = localStorage.getItem("token")
    
        fetch(`http://localhost:3000/teams/${team.id}`, {
            method: 'DELETE', 
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(resp => resp.json())
        .then(data => {
          //setUser(data)
        })
        }

    const handleRemoveLastTeam = () => {
        let remainingTeams = [...teams]
        const lastTeam = remainingTeams.pop()
        deleteTeam(lastTeam)
        updateTeams(remainingTeams)
    }

    const renderPokemonTeam = (team, index) => {
        const updateTeam = (updatedTeam) => {
            let newTeams = [...teams];
            newTeams[index] = updatedTeam;
            updateTeams(newTeams)
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
                {teams.map(renderPokemonTeam)}
            </ul>
            <button onClick={handleAddTeam}>+</button>
            <button onClick={handleRemoveLastTeam}>-</button>
        </>
    )
}