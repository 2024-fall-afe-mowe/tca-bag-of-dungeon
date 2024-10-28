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
        <div className="text-2xl font-bold item-center text-center mb-2">
        {AppTitle}
        </div>
    <div className="items-center text-center mb-2">
      <span className="text-1xl font-bold">
        {title}

        <RouterProvider 
        router={router}
        />


      </span>
      </div>



    </div>
  );
}

export default App;
