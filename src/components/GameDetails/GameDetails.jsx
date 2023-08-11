import "./GameDetails.scss";
import { useSelector } from "react-redux";
function GameDetails() {
  const { game, screenshots } = useSelector((state) => state.details);

  return (
    <div className="GameDetails">
      <div className="game-shadow">
        <div className="details">
            <div className="stats">
                <div className="rating">
                    <h3>{game.name}</h3>
                    <p>Rating: {game.rating}</p>
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
                <img src={game.background_image} />
            </div>
            <div className="description">
                <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
                {screenshots.map((screen) => (
                 <img key={screen.id} src={screen.image} />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
