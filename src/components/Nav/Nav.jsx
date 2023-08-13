import "./Nav.scss"
import logo from "../../assets/logo.svg"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {loadSearchedGames, clearSearch} from "../../redux/slices/gamesSlice"

function Nav() {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState("")

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(loadSearchedGames(textInput))
    setTextInput("")
  }

  const clearHandler = () => {
    dispatch(clearSearch())
  }
  
  return (
    <div className="Nav">
        <div className="logo" onClick={clearHandler}>
            <img src={logo} />
            <h1>Ignite</h1>
        </div>
        <form className="search">
            <input type="text" value={textInput} onChange={inputHandler}/>
            <button onClick={searchHandler} type="submit">Search</button>
        </form>
    </div>
  )
}

export default Nav