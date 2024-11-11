import { useNavigate } from "react-router-dom";

import { 
  SetStateAction,
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
     const [lifeCounter, updateLifeCounter] = useState(3); //always base of 3
     const [hPCounter, updateHPCounter] = useState(9); //range from 9 to 12
     const [counter, updateCounter] = useState(5); //range from 4 to 6
     const [playerRoll, setPlayerRoll] = useState(0); //cannot be more than 2d6 dice, so no more than 12 without modifiers
     const [modifiedCombat, setModifier] = useState(0);

      const actionPointIncrease = () => {
          updateCounter(counter + 1)
      };

      const actionPointDecrease = () => {
        updateCounter(counter <= 0 ? 0 : counter -1)
      };

      const resetAP = () => {
        updateCounter(5);
      };

      const hPIncrease = () => {
          updateHPCounter(counter + 1)
      };

      const hPDecrease = () => {
        updateHPCounter(counter <= 0 ? 0 : counter -1)
      };

      const resetHP = () => {
        updateHPCounter(9);
      };

      const lifeIncrease = () => {
        updateLifeCounter(counter + 1)
      };

      const lifeDecrease = () => {
        updateLifeCounter(counter <= 0 ? 0 : counter -1)
      };

      const resetLives = () => {
        updateLifeCounter(9);
      };

      
      const playerDiceMath = (min: number, max: number) => {
        return Math.floor(Math.random()
        * (max - min + 1)) + min;
      };

      const playerDiceRoll = () => {
        setPlayerRoll(playerDiceMath(1, 12));
      };

//Calculations Start
      const getModifiers = (event: { target: { value: SetStateAction<number>; }; }) => {
        setModifier(event.target.value);
        console.log(setModifier);
      }

      const combatRollMath = (a: number,b: number) => {
          return +a + +b;
      }

      const calculateRoll = () => {
       
       console.log(modifiedCombat)

      }



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
      <div className="form-control flex">

      {/* Player Card */}
      <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3" >
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
                  
                  <div className="flex font-small ">
                    <div className="items-center">
                      <span> 
                         <a className="text-sm font-small">Lives: <br /> </a>
                         </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick={lifeDecrease}
                    > -
                    </button>
                    <span className="items-center"> {lifeCounter} </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick= {lifeIncrease}
                    >+
                    </button>

                    <br />

                    <span>
                      <button className="btn btn-outline btn-success btn-sm"
                      onClick={resetLives}>
                        Reset Lives
                      </button>
                    </span>

                    </div>
                  </div>

                  <br/>
    
                  <div className="flex font-small">
                    <div className="items-center">
                      <span> 
                         <a className="text-sm font-small">Health Points: <br /> </a>
                         </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick={hPDecrease}
                    > -
                    </button>
                    <span className="items-center"> {hPCounter} </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick= {hPIncrease}
                    >+
                    </button>

                    <br />

                    <span>
                      <button className="btn btn-outline btn-success btn-sm"
                      onClick={resetHP}>
                        Reset Health
                      </button>
                    </span>

                    </div>
                  </div>

                  <br/>

                  <div className="flex font-small">
                    <div className="items-center">
                      <span> 
                         <a className="text-sm font-small">Action Points: <br /> </a>
                         </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick={actionPointDecrease}
                    > -
                    </button>
                    <span className="items-center"> {counter} </span>
                    <button className="btn btn-outline btn-success btn-sm"
                    onClick= {actionPointIncrease}
                    >+
                    </button>

                    <br />

                    <span>
                      <button className="btn btn-outline btn-success btn-sm"
                      onClick={resetAP}>
                        Reset Points
                      </button>
                    </span>

                    </div>
                  </div>
                 

               
                  <div className="divider lg:divider-vertical"></div>
              </div>
  
            )
          )
         } 
                </span> 

        
              </div>

        </div>
      </div>

         {/* Player Rolls */}

         <div className="flex form-control">
            <span> Player Dice </span>
            <button className="btn btn-outline btn-success"
            onClick={playerDiceRoll}
            >Roll</button>
            You rolled: {playerRoll} 

            <span><br />
            <label>
              Combat Modifiers:    
              <input name="enteredModifier" defaultValue="0" //onChange={() => getModifiers} 
              />
            </label>
            
            <button className="btn btn-outline btn-success btn-sm"
            onClick={calculateRoll}
            >Calculate</button>
            </span>
            Your Score: {modifiedCombat}

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
               <option 
              // onChange={ }
               > 
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