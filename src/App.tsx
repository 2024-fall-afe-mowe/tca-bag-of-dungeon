import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

 import { Home } from "./home";
 import { Play } from "./play";
 import { Settings } from "./settings";

 import { 
    GameResult,
    getLeaderboard
} from "./game-results";



const App = () => {

const router = createHashRouter(
  [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/play",
    element: <Play />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
]
);

  return (
    <div className="App">
      <RouterProvider 
        router={router}
        />
    </div>
  );
}

export default App;
