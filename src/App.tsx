import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
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

const dummyGameResults: GameResult[] = [
  {
    winner: "Chris",
    players: [
      "Chris",
      "Mina",
      "John",
      "Orion"
    ]
  },
  {
    winner: "Mina",
    players: [
      "Chris",
      "Mina",
      "Orion"
    ]
  },
  {
    winner: "Mina",
    players: [
      "Chris",
      "Mina",
      "Artemis",
    ]
  }
];





const App = () => {

  const [gameResults, setGameResults] = useState(dummyGameResults);
/*
const addNewGameResult = (newResult: GameResult) => setGameResults([
  ...gameResults,
  newResult
]); */



const router = createHashRouter(
  [
  {
    path: "/",
    element: <Home 
      leaderboardData={getLeaderboard(gameResults)}
    />
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
