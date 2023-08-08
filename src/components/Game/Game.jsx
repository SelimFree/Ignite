import "./Game.scss"

function Game({game}) {
  return (
    <div className="Game">
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} />
    </div>
  )
}

export default Game