import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
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

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`http://localhost:3000/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then(data => {
        handleLogin(data)
        // console.log(data)
      })
    }
  }, [])

  const handleLogin = (user) => {
    setUser(user)
    fetchPokemon()
    history.push("/profile");

  }

  const handleAuthClick = () => {
    const token = localStorage.getItem("token")
    fetch(`http://localhost:3000/user_is_authed`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
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

    return <TeamProfile pokemon={pokemonData} teams={user.teams} />
  }

  const clearUser = () => {
    setUser(null)
  }

  return (
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
      {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
    </div>
  );
}

export default App;
