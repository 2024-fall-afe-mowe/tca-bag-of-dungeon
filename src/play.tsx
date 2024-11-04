import { useNavigate } from "react-router-dom";

import { 
  useEffect,
  useRef, 
  useState 
} from "react";

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
  //currentCharacter: currentCharacter[];
  setTitle:(t:string) => void;
 }

export const Play: React.FC<PlayProps> = ({
  addNewGameResult,
  currentPlayers,
  setTitle
}) => {

  useEffect(
    () => setTitle("Play"),
    []
  );

    const nav = useNavigate();

 


    const [startTimeState, setStartTimeState] = useState(new Date().toISOString());

    return(

  <div className="text-center">
{/*     <h1 className="text-2xL font-bold">
      Play
    </h1> */}

    {/* home button */}
{/*     <button className = "btn"
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
    </button> */}

{/* start playing button */}

      {/* Play screen cards */}
      <div className="form-control items-center">

      {/* Player Card */}
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3">
              <div>
                <span>
                {
          currentPlayers.map(
            x => (
              <div className="form-control"
              key={x.name}>
                 <span className="flex label-text">
                    {x.name} <br/>
                  </span>
                 <a className="text-sm font-small"> Character: 
                  {/* {x.selectedCharacter} */} </a>
                  <br/>
              <span className="text-sm font-small">
                Actions Points: 
              </span>
               
                  <div className="divider lg:divider-vertical"></div>
              </div>
            )
          )
         } 
                </span> 

        
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

   

     <div className="card bg-base-100 shadow-xl mb-3 items-center">
        <div className="card-body p-3 overflow-x-hidden mb3">
        <h3 className="card-title">
                       End Game
                    </h3>
        </div>
        <div> {/* Shows when players active */}
                {
                  currentPlayers.map(x => (
                      <button
                          key={x.name}
                          className="btn btn-outline mb-3 ml-3 flex-nowrap overflow-hidden"
                          onClick={() => {
                              addNewGameResult({
                                  startTime: startTimeState,
                                  endTime: new Date().toISOString(),
                                  winner: x.name,
                                  players: currentPlayers.map(y => y.name),
                              });
                              nav(-2);
                          }}
                      >
                          <div
                              className="text-nowrap">
                              {x.name} Won
                          </div>               
                      </button>
                    ))
                }
                </div>
        </div> 
        </div>
          {/* Game Over button */}
    <button className = "btn btn-warning"
        onClick={() => nav(-2)}>
        Quit
    </button>
  </div>
    );
  }