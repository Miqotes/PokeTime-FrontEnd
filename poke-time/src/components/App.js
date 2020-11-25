import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header'
import SignInForm from './SignInForm';
import LoginForm from './LoginForm';
import PokemonList from './PokemonList';

function App() {
  const [user, setUser] = useState({})
  const [form, setForm] = useState("")
  const [pokemonData, setPokemonData] = useState([])

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
    handleFormSwitch("listPokemon")
  }

  const handleFormSwitch = (input) => {
    setForm(input)
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

  console.log(user)

  const renderForm = () => {
    switch(form){
      case "listPokemon":
        return <PokemonList pokemon={pokemonData} />
        break;
      case "login":
        return <LoginForm handleLogin={handleLogin}/>
        break;
      default:
        return <SignInForm handleLogin={handleLogin}/>
    }
  }
  return (
    <div className="App">
        <Header handleFormSwitch={handleFormSwitch}/>
        {
          renderForm()
        }
        {/* <button onClick={handleAuthClick} className="ui button">Access Authorized Route</button> */}
    </div>
  );
}

export default App;
