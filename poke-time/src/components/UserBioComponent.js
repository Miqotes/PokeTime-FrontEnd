import React,  { useState } from 'react';

export default function UserBioComponent(props) {
    const {user} = props;
    console.log(user)

    const [bio, setBio] = useState(user.bio || "");
    
    const handleBioChange = (e) => {
        setBio(e.target.value);
    }

    const updateBio = (e) => {
        const token = localStorage.getItem("token")
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({bio})
        })
        .then(resp => resp.json())
        .then(console.log)
    }

    return (
        <form >
            <div className="ui column container ui red segment">
                <span className="field profileBox">{user.username}</span>
                <textarea className="" type="text" rows="3" value={bio} onChange={handleBioChange}  />
                <button type="submit" onClick={updateBio}>submit</button>
            </div>
        </form>
    );
}