import { useDispatch } from "react-redux";
import { loadDetails } from "../../redux/slices/detailsSlice";
import { Link } from "react-router-dom";
import { smallImage } from "../../utils";
import "./Game.scss";

function Game({ game }) {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden"
    dispatch(loadDetails(game.id));
  };
  return (
    <Link to={`games/${game.id}`}>
      <div className="Game" onClick={loadDetailsHandler}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <div className="img-container">
          <img src={smallImage(game.background_image, 640)} />
        </div>
      </div>
    </Link>
  );
}

export default Game;
