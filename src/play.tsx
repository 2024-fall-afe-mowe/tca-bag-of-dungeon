import { useNavigate } from "react-router-dom";

import { 
  useEffect,
  useRef, 
  useState 
} from "react";

import { 
  CurrentPlayer,
  CurrentCharacter,
  bossType,
  monsterList,
  Monster,
  Turn,
  GameResult
 } from "./game-results";

 interface PlayProps {
  addNewGameResult: (gr: GameResult) => void;
  currentPlayers: CurrentPlayer[];
  currentCharacters: CurrentCharacter[];
  setTitle:(t:string) => void;
 }

export const Play: React.FC<PlayProps> = ({
  addNewGameResult,
  currentPlayers,
  currentCharacters,
  setTitle
}) => {

 // console.log(currentPlayers); 

  useEffect(
    () => setTitle("Play"),
    []
  );

    const nav = useNavigate();

     const [startTimeState, setStartTimeState] = useState(new Date().toISOString());
     const [lifeCounter, updateLifeCounter] = useState(3); //always base of 3
     const [hPCounter, updateHPCounter] = useState(9); //range from 9 to 12
     const [counter, updateCounter] = useState(5); //range from 4 to 6
     const [playerRoll, setPlayerRoll] = useState(0); //range from 2 to 12

     const [modifiedCombat, setModifier] = useState(0);

     const [combatResult, setResult] = useState(0);

     const [turns, setTurns] = useState<Turn[]>([
      {
          turnNumber: 1,
          player: currentPlayers[0].name,
          playerCharacter: currentPlayers[0].character,
          actionPointsUsed: 0,
          hPLost: 0
      }
  ]);


    //counter functions
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
          updateHPCounter(hPCounter + 1)
      };
      const hPDecrease = () => {
        updateHPCounter(hPCounter <= 0 ? 0 : hPCounter -1)
      };
      const resetHP = () => {
        updateHPCounter(9);
      };
      const lifeIncrease = () => {
        updateLifeCounter(lifeCounter + 1)
      };
      const lifeDecrease = () => {
        updateLifeCounter(lifeCounter <= 0 ? 0 : lifeCounter -1)
      };
      const resetLives = () => {
        updateLifeCounter(3);
      };

    //Player dice roll
      const playerDiceMath = (min: number, max: number) => {
        return Math.floor(Math.random()
        * (max - min + 1)) + min;
      };

      const playerDiceRoll = () => {
        setPlayerRoll(playerDiceMath(2, 12));
      };




//Calculations Start
      const getModifiers = () => {
        if(
          modifiedCombat > 0 || modifiedCombat < 0
        )
        {
          setModifier(
          modifiedCombat
          )
        }
        console.log(modifiedCombat);
      }


      const calculateRoll = () => {
        setResult(
          playerRoll + modifiedCombat
        )
    //   console.log(combatResult)
      }

      const subtractRoll = () => {
        setResult(
          playerRoll - modifiedCombat
        )
      // console.log(combatResult)
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

{/*         <button 
        className="btn btn-outline btn-success btn-small"
        onClick={setActive} >
          Roll to Start
        </button> */}

      {/* Player Card */}
      <div className="flex flex-col">
      <div className="card bg-base-100 shadow-xl mb-3 flex-col">
        <div className="card-body p-3 overflow-x-hidden mb-3" >
              <div>
                <span>
                {
          turns.map((x, i) => (
              <div className="form-control join p-5"
              key={`${x.turnNumber}~${x.player}~${x.playerCharacter}`}
              >
                
                 <span className="flex">
                  <div>
                      <span 
                      className="align-top text-small">
                        Turn: {x.turnNumber} 
                      </span>
                      <br/>
                      <span
                      className="flex">
                        <table className="table table-xs">
                          <thead>
                            <tr>
                              <th>
                              {x.player}
                              </th>
                              <th>
                              {x.playerCharacter.characterName}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                Health:
                              </td>
                              <td>
                                {x.playerCharacter.health}
                              </td>
                            </tr>

                            <tr>
                              <td>
                                Combat Modifier:
                              </td>
                              <td>
                                {x.playerCharacter.combatModifier}
                              </td>
                            </tr>

                            <tr>
                              <td>
                                Special Skill:
                              </td>
                              <td>
                                {x.playerCharacter.specialSkill}
                              </td>
                            </tr>
                           </tbody>
                        </table>
                        

                      </span>
                  </div>
                  </span> 
                  {
                    turns.length - 1 === i
                    ? (
                  <div className="flex font-small">
                      <div className="items-center">

                      <table className="table table-xs">
                      <thead>
                            <tr>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                Lives
                              </td>
                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                               onClick={lifeDecrease}
                              > -
                              </button>
                              </td>
                              <td>
                                {lifeCounter}
                              </td>
                              <td></td>
                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                                onClick={resetLives}
                                >
                                  Reset
                                </button>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                Health Points
                              </td>
                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                               onClick={hPDecrease}
                              > -
                              </button>
                              </td>
                              <td>
                                {hPCounter}
                              </td>

                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                               onClick={hPIncrease}
                              > +
                              </button> 
                              </td>

                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                                onClick={resetHP}
                                >
                                  Reset
                                </button>
                              </td>
                            </tr>

                            <tr>
                              <td>
                                Action Points
                              </td>
                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                               onClick={actionPointDecrease}
                              > -
                              </button>
                              </td>
                              <td>
                                {counter}
                              </td>

                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                               onClick={actionPointIncrease}
                              > +
                              </button> 
                              </td>

                              <td>
                              <button className="btn btn-outline btn-success btn-sm"
                                onClick={resetAP}
                                >
                                  Reset
                                </button>
                              </td>
                            </tr>

                            </tbody>
                      </table>


                    </div>

                    <div className="flex font-small">
                    
                  </div>
                  <div className="flex font-small">
                   
                  </div>
                    </div>

                    )
                    :
                    (
                      <div>
                     
                      </div>
                    )
                  }
                  </div>//LAST DIV
                
              )
            )
           } 

            <div className="flex">
              {
                
              }

            </div>

                  <div className="divider lg:divider-vertical"></div>
                  <span>
                      <button
                    className="btn btn-outline btn-sm"
                    onClick={() => turns.length > 1 && setTurns(turns.slice(0, -1))}>
                      &lt;
                    </button>
                    <button
                    className="btn btn-outline btn-sm"
                    onClick={() => setTurns([
                      ...turns, 
                      {
                        turnNumber: turns.length % currentPlayers.length > 0
                        ? Math.ceil(turns.length / currentPlayers.length)
                        : (turns.length / currentPlayers.length) + 1,
                        player: currentPlayers[
                          turns.length % currentPlayers.length
                        ].name, 
                        playerCharacter: currentPlayers[
                          turns.length % currentPlayers.length
                        ].character,
                        actionPointsUsed: 0,
                        hPLost: 0
                      }
                    ]) }>
                      Next
                    </button>
                  </span>





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
              <input className="input input-bordered input-xs mx-2"
              name="enteredModifier"  
              value={modifiedCombat}
              onChange={(e) => setModifier(Number(e.target.value))}
              /> 
            </label>
            
            {/* <button className="btn btn-outline btn-secondary btn-sm"
            onClick={getModifiers}
            >Set</button> */}
            </span>

            <span>
              <button
              className="btn btn-outline btn-success mt-2 mx-1"
              onClick={calculateRoll}
              >
                Add Modifiers
              </button>

{/*               <button
              className="btn btn-outline btn-warning mt-2"
              onClick={subtractRoll}
              >
                Negative Modifiers
              </button> */}
            </span>
            Your Score: {combatResult}

         </div>
         </div>


      {/* Monster Card */}
{/*       <div className="card bg-base-100 shadow-xl mb-3">
        <div className="card-body p-3 overflow-x-hidden mb-3">
           <h3 className="card-title">Monster Card </h3>
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
      
      </div> */}

      {/* Boss Card */}
{/*       <div className="card bg-base-100 shadow-xl mb-3">
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
 */}
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