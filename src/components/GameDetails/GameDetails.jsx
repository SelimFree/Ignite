import { useNavigate } from "react-router-dom";
import "./GameDetails.scss";
import { useSelector } from "react-redux";
import { smallImage } from "../../utils";
import { motion } from "framer-motion";
//images
import playstation from "../../assets/playstation.svg";
import xbox from "../../assets/xbox.svg";
import steam from "../../assets/steam.svg";
import nintendo from "../../assets/nintendo.svg";
import ios from "../../assets/apple.svg";
import gamepad from "../../assets/gamepad.svg";
import starFull from "../../assets/star-full.png";
import starHalf from "../../assets/star-half.png";
import starEmpty from "../../assets/star-empty.png";

function GameDetails({ layoutId }) {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );
  const navigaton = useNavigate();
  const exitDetailsHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("game-shadow")) {
      document.body.style.overflow = "auto";
      navigaton("/");
    }
  };

  const getPlatform = (platforms) => {
    let filteredPlatforms = [];
    for (let i = 0; i < platforms.length; i++) {
      let img;
      switch (platforms[i].platform.name) {
        case "PlayStation 4":
        case "PlayStation 5":
          img = playstation;
          break;
        case "Xbox One":
        case "Xbox Series S/X":
          img = xbox;
          break;
        case "PC":
          img = steam;
          break;
        case "Nintendo Switch":
          img = nintendo;
          break;
        case "iOS":
          img = ios;
          break;
        default:
          img = gamepad;
          break;
      }
      if (!filteredPlatforms.includes(img)) {
        filteredPlatforms.push(img);
      }
    }
    return filteredPlatforms;
  };

  const getRating = (rating) => {
    let counter = rating;
    let stars = [];
    for (let j = 5; j > 0; j--) {
      if (counter >= 1) {
        stars.push(starFull);
      } else if (counter < 1 && counter > 0) {
        stars.push(starHalf);
      } else {
        stars.push(starEmpty);
      }
      counter--;
    }
    console.log(stars);
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <div className="GameDetails">
          <div className="game-shadow" onClick={exitDetailsHandler}>
            <motion.div layoutId={layoutId} className="details">
              <div className="stats">
                <div className="rating">
                  <motion.h3 layoutId={`title ${layoutId}`}>
                    {game?.name}
                  </motion.h3>
                  <div className="stars">
                    {getRating(game?.rating)?.map((star, i) => (
                      <img key={i} src={star} />
                    ))}
                  </div>
                </div>
                <div className="info">
                  <h3>Platforms</h3>
                  <div className="platforms">
                    {getPlatform(game?.platforms)?.map((platform, i) => (
                      <img key={i} src={platform} />
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                layoutId={`img-wrapper ${layoutId}`}
                className="media"
              >
                <motion.img
                  layoutId={`image ${layoutId}`}
                  src={smallImage(game.background_image, 1280)}
                />
              </motion.div>
              <div className="description">
                <p>{game?.description_raw}</p>
              </div>
              <div className="gallery">
                {screenshots?.map((screen) => (
                  <img key={screen.id} src={smallImage(screen.image, 1280)} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameDetails;
