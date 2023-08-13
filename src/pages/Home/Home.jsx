import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../../redux/slices/gamesSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//Animation
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
// Importing components
import Game from "../../components/Game/Game";
import GameDetails from "../../components/GameDetails/GameDetails";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const { popularGames, upcomingGames, newGames, searchedGames } = useSelector(
    (state) => state.games
  );

  const location = useLocation();
  const gameId = location.pathname.split("/")[2];
  return (
    <motion.div className="Home">
      <LayoutGroup>
        <AnimatePresence>
          {gameId ? <GameDetails layoutId={gameId} /> : <></>}
        </AnimatePresence>
        {searchedGames.text && (
          <div className="search-list">
            <div className="games-list">
              <h2>Searching for "{searchedGames.text}"</h2>
              <div className="games">
                {searchedGames.games.map((game) => (
                  <Game key={game.id} game={game} />
                ))}
              </div>
            </div>
          </div>
        )}

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
      </LayoutGroup>
    </motion.div>
  );
}

export default Home;
