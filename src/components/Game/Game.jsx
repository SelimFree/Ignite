import { useDispatch } from "react-redux"
import { loadDetails } from "../../redux/slices/detailsSlice"
import "./Game.scss"

function Game({game}) {

  const dispatch = useDispatch()

  const loadDetailsHandler = () => {
    dispatch(loadDetails(game.id));
  }
  return (
    <div className="Game" onClick={loadDetailsHandler}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} />
    </div>
  )
}

export default Game