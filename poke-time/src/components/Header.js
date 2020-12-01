import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from "./NavBar"

const headerStyle = {
    background: "black",
    height: "15vh",
    // lineHeight: "15vh"
}
function Header(props){
    const {user, clearUser} = props;
    return(
        <div style={headerStyle}>
            <h1 style={{color: "white"}}>Poke-Time</h1>
            {user ? (
                <>
                    <NavBar clearUser={clearUser} />
                </>
            ) : (
                <span>
                    <Link to={'/signup'}>
                        <button className="">Sign Up</button>
                    </Link>
                    <div class="divider"/>
                    <Link to={'/login'}>
                        <button className="">Log In</button>
                    </Link>
                </span>
            )}
        </div>
    )
}

export default Header;