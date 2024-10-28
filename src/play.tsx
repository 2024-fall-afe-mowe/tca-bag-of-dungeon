import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  CurrentPlayer,
  Character,
  bossType,
  monsterList,
  Monster,
  GameResult
 } from "./game-results";

 interface PlayProps {
  addNewGameResult: (gr: GameResult) => void;
  currentPlayers: CurrentPlayer[];
 }

export const Play: React.FC<PlayProps> = ({
  addNewGameResult,
  currentPlayers
}) => {

    const nav = useNavigate();
    const [startTimeState, setStartTimeState] = useState(new Date().toISOString());

    return(
  <div className="text-center">
    <h1 className="text-2xL font-bold">
      Play
    </h1>
    {/* home button */}
    <button className = "btn"
        onClick={() => nav("../")}>
        <a>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        </a> Home
    </button>
{/* start playing button */}
{/*     <button className = "btn">
      <a>
      <svg xmlns="http://www.w3.org/2000/svg"  
      x="0px" y="0px" width="512px" height="392.34px"  
      enable-background="new 0 0 512 392.34"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 512 392.34">
    <g><path 
    d="M98.02 0h315.96c26.89 0 51.4 11.03 69.19 28.82C500.96 46.54 512 71.05 512 98.02V294.3c0 26.91-11.03 51.41-28.83 69.21-17.71 17.78-42.22 28.82-69.19 28.82H98.02c-26.97 0-51.48-11.04-69.23-28.79l-1.1-1.18C10.57 344.67 0 320.64 0 294.3V98.02c0-26.89 11.03-51.37 28.79-69.16l.07-.07C46.69 11.01 71.15 0 98.02 0zm225.71 208.59c12.37-7.99 12.34-16.89 0-23.96l-99.22-69.09c-10.09-6.32-20.6-2.61-20.32 10.55l.4 139c.86 14.27 9.01 18.19 21.02 11.59l98.12-68.09zm90.25-169.67H98.02c-16.29 0-31.07 6.62-41.73 17.3l-.07.07c-10.68 10.66-17.3 25.44-17.3 41.73V294.3c0 15.88 6.28 30.31 16.47 40.9l.9.84c10.71 10.71 25.49 17.37 41.73 17.37h315.96c16.24 0 31.02-6.66 41.73-17.37 10.74-10.66 17.37-25.44 17.37-41.74V98.02c0-16.24-6.66-31.02-17.37-41.73-10.66-10.75-25.44-17.37-41.73-17.37z"/></g></svg>
       </a> Start Playing
  </button> */}
      {/* Play screen cards */}
      <div className="form-control items-center">

      {/* Player Card */}
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3">
           <h3 className="card-title">
                        Character Card
                    </h3>
              <div>
                placeholder for current character data
              </div>

        </div>
      </div>

      {/* Monster Card */}
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3">
           <h3 className="card-title"> Monster Card </h3>
           <div className="card-body p-3 overflow-x-hidden mb-3">
                 
                 <select className="select select-bordered w-full max-w-xs">
                 <option disabled selected>Select Monster</option>
                 {
           monsterList.map(
             x => (
               <option> 
               {x.monsterName} </option>
             )
           )
          } 
                 </select>
         </div>
        </div>
      </div>

      {/* Boss Card */}
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3">
           <h3 className="card-title">
                        Boss Card
                    </h3>
                    <select className="select select-bordered w-full max-w-xs">
                 <option disabled selected>Select Monster</option>
                 {
           bossType.map(
             x => (
               <option> 
               {x.bossName} </option>
             )
           )
          } 
                 </select>
        </div>
      </div>

      </div>

          {/* Game Over button */}
    <button className = "btn btn-warning"
        onClick={() => nav(-2)}>
        Game Over
    </button>
  </div>
    );
  }