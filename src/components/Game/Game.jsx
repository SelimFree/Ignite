import "./Game.scss";
import { useDispatch } from "react-redux";
import { loadDetails } from "../../redux/slices/detailsSlice";
import { Link } from "react-router-dom";
import { smallImage } from "../../utils";
//Animation
import { motion } from "framer-motion";
import { popUp } from "../../animation";

function Game({ game }) {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    document.body.style.overflow = "hidden"
    dispatch(loadDetails(game.id));
  };
  return (
    <Link to={`games/${game.id}`}>
      <motion.div variants={popUp} initial="hidden" animate="show" layoutId={`${game.id}`} className="Game" onClick={loadDetailsHandler} >
        <motion.h3 layoutId={`title ${game.id}`}>{game.name}</motion.h3>
        <p>{game.released}</p>
        <motion.div layoutId={`img-wrapper ${game.id}`} className="img-container">
          <motion.img layoutId={`image ${game.id}`} src={smallImage(game.background_image, 640)} />
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default Game;
