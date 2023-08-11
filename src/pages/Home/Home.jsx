import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../redux/slices/gamesSlice";
import { useEffect } from "react";
// Importing components
import Game from "../../components/Game/Game";
import GameDetails from "../../components/GameDetails/GameDetails";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <div className="Home">
      <GameDetails />
      <div className="games-list">
        <h2>Popular Games</h2>
        <div className="games">
          {popularGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="games-list">
        <h2>New Games</h2>
        <div className="games">
          {newGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </div>

      <div className="games-list">
        <h2>Upcoming Games</h2>
        <div className="games">
          {upcomingGames.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
