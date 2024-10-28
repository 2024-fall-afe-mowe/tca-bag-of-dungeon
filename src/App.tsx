import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

 import { AppTitle, Home } from "./home";
 import { Play } from "./play";
 import { Settings } from "./settings";

 import { 
    GameResult,
    getLeaderboard,
    getPreviousPlayers, 
    CurrentPlayer, 
    getGeneralFacts
} from "./game-results";

const dummyGameResults: GameResult[] = [
  {
    startTime: "2024-09-23T15:36:25.123Z",
    endTime: "2024-09-23T15:46:25.123Z",
    winner: "Chris",
    players: [
      "Chris",
      "Mina",
      "John",
      "Orion"
    ]
  },
  {
    startTime: "2024-09-23T15:36:25.123Z",
    endTime: "2024-09-23T15:46:25.123Z",
    winner: "Mina",
    players: [
      "Chris",
      "Mina",
      "Orion"
    ]
  },
  {
    startTime: "2024-10-23T15:36:25.123Z",
    endTime: "2024-10-23T15:46:25.123Z",
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

const [title, setTitle] = useState(AppTitle);

const [currentPlayer, setCurrentPlayers] = useState<CurrentPlayer[]>([]);

const addNewGameResult = (newResult: GameResult) => setGameResults([
  ...gameResults,
  newResult
]);

const router = createHashRouter(
  [
  {
    path: "/",
    element: <Home 
      leaderboardData={getLeaderboard(gameResults)}
      generalFactsData={getGeneralFacts(gameResults)}
      setTitle={setTitle}
    />
  },
  {
    path: "/play",
    element: <Play 
      addNewGameResult={addNewGameResult}
      currentPlayers={currentPlayer}
      setTitle={setTitle}
    />,
  },
  {
    path: "/settings",
    element: <Settings
    previousPlayers={getPreviousPlayers(gameResults)}
    setCurrentPlayers={setCurrentPlayers}
    setTitle={setTitle}
 
    />,
  },
]
);


  return (
    <div className="App">

    {AppTitle}

    <div className="navbar bg-base-200 items-center text-center">
      <span className="text-2xl font-bold text-center">
        {title}
      </span>
      </div>

      <RouterProvider 
        router={router}
        />



    </div>
  );
}

export default App;
