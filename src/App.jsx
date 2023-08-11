import "./App.css";
// Importing pages
import Home from "./pages/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/games/:id",
    element: <Home/>,
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
