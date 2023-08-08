import "./App.css";
import { useDispatch } from "react-redux";
import { loadGames } from "./redux/slices/gamesSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div className="App">
      <h1>Hi there</h1>
    </div>
  );
}

export default App;
