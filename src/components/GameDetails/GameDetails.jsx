import { useNavigate } from "react-router-dom";
import "./GameDetails.scss";
import { useSelector } from "react-redux";
import { smallImage } from "../../utils";
function GameDetails() {
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );
  const navigaton = useNavigate()
  const exitDetailsHandler = (e) =>{
    const element = e.target;
    if (element.classList.contains("game-shadow")) {
        document.body.style.overflow = "auto"
        navigaton("/")
    }
  }

  return (
    <>
      {!isLoading && (
        <div className="GameDetails">
          <div className="game-shadow" onClick={exitDetailsHandler}>
            <div className="details">
              <div className="stats">
                <div className="rating">
                  <h3>{game?.name}</h3>
                  <p>Rating: {game?.rating}</p>
                </div>
                <div className="info">
                  <h3>Platforms</h3>
                  <div className="platforms">
                    {game?.platforms?.map((data) => (
                      <h3 key={data.platform.id}>{data.platform.name}</h3>
                    ))}
                  </div>
                </div>
              </div>
              <div className="media">
                <img src={smallImage(game.background_image, 1280)} />
              </div>
              <div className="description">
                <p>{game?.description_raw}</p>
              </div>
              <div className="gallery">
                {screenshots?.map((screen) => (
                  <img key={screen.id} src={smallImage(screen.image, 1280)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GameDetails;
