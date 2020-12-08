import React, { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Switch, Route, useHistory } from 'react-router-dom';

import './App.css';
import Header from './Header'
import Home from './Home';
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import Profile from './Profile';
import FriendsContainer from './FriendsContainer';
import TeamProfile from "./TeamProfile";
// import 'bulma/css/bulma.css'

function App() {
  const history = useHistory();
  const [user, setUser] = useState(null)
  const [pokemonData, setPokemonData] = useState(null)

  const handleLogin = () => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        finishLogin(data)
        // console.log(data)
      })
    }
  }

  useEffect(handleLogin, [])

  const finishLogin = (user) => {
    setUser(user)
    fetchPokemon()
    history.push("/profile");

  }

  const fetchPokemon = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/pokemon`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => setPokemonData(data))
  }

  const patchUser = (user) => {
    const token = localStorage.getItem("token")
    const userPatch = {
      teams: user.teams,
      favorites: user.favorites,
    }
    setUser(user)

    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH', 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(userPatch),
    })
    .then(resp => resp.json())
    .then(data => {
      //setUser(data)
    })
  }
  

  const updateFavorite = (favorites) => {
    patchUser({...user, favorites})
  }

  const updateTeams = (teams) => {
    patchUser({...user, teams})
  }

  const LoginContainer = () => {
    return <LoginForm handleLogin={handleLogin}/>
  }

  const SignupContainer = () => {
    return <SignInForm handleLogin={handleLogin}/>
  }

  const ProfileContainer = () => {
    if (!user) return null;
    if (!pokemonData) return null;

    return <Profile pokemon={pokemonData} user={user} />
  }

  const TeamProfileContainer = () => {
    if(!user) return null;
    if(!pokemonData) return null;
    console.log(user)
    return (
      <TeamProfile
        pokemon={pokemonData}
        teams={user.teams}
        updateTeams={updateTeams}
        favorites={user.favorites}
        updateFavorite={updateFavorite}
      />
    )
  }

  const clearUser = () => {
    setUser(null)
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        {user ? (
          <React.Fragment>
            <Header user={user} clearUser={clearUser} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={ProfileContainer} />
              <Route path="/friends" component={FriendsContainer} />
              <Route path="/team_lists" component={TeamProfileContainer} />
            </Switch>
          </React.Fragment>
        ) : (
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/signup" component={SignupContainer} />
            </Switch>
          </>
        )}
      </div>
    </DndProvider>
  );
}

export default App;
