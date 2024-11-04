
import { useNavigate } from "react-router-dom";

import { 
  useEffect,
  useRef, 
  useState 
} from "react";

import {
  BossData,
  bossType,
  Character,
  availableCharacter,
  CurrentPlayer,
  getPreviousPlayers
 } from "./game-results";

 interface SetupProps {
  previousPlayers: string[];
  setCurrentPlayers: (players: CurrentPlayer[]) => void;
  setCurrentCharacter: (character: Character[]) => void;
  setTitle:(t:string) => void;
}

 interface availablePlayers {
  name: string;
  checked: boolean;
  character: Character
 }


export const Settings: React.FC<SetupProps> = ({
  previousPlayers,
  setCurrentPlayers,
  setTitle
}) => {

  useEffect(
    () => setTitle("Setup"),
    []
  );

  const nav = useNavigate();

  const [selectedCharacter, setCurrentCharacter] = useState(
    availableCharacter.map(
      x => ({
        characterName: x,
        checked: true,
      })
    )
  );

  const [availablePlayers, setAvailablePlayers] = useState(
    previousPlayers.map(x => ({
        name: x,
        checked: false,
        character: undefined
     }))
);

  const [newPlayerName, setNewPlayerName] = useState("");


  const validationDialogRef = useRef<HTMLDialogElement | null> (null);

  const validateAndAddNewPlayer = () => {
    if(
      newPlayerName.length === 0 || availablePlayers.some(
        x => x.name.toUpperCase() === newPlayerName.toUpperCase()

      )
    )
    {
      validationDialogRef.current?.showModal();
      return;
    }
      setAvailablePlayers(
        [
          ...availablePlayers,
          {
            name: newPlayerName,
            checked: true,
            character: undefined
          }
        ].sort(
          (a,b) => a.name.toLocaleUpperCase().localeCompare(b.name.toUpperCase())
        )
      );
        setNewPlayerName("");

  };

/*   const getCharacterData = () => {
    availableCharacter.map(
      x => (
        x.characterName, 
        x.health, 
        x.combatDice,
        x.combatModifier,
        x.specialSkill,
        x.specialNotes
      )
    )
  }; */


  const playersChosen = 
  availablePlayers.filter(x => x.checked).length <= 4 && 
  availablePlayers.filter(x => x.checked).length > 0
  ;


/* const setCharacter = (playerName: string, character: Character[]) => setAvailablePlayers(
  availablePlayers.map(x => ({
    ...x, 
    selectedCharacter: x.name === playerName
    ? character
    : x.character
  })
)
) */

    return(
  <div>
  <div className="text-center mb-3">
{/*     <h1 className="text-2xL font-bold">
      Set Up
    </h1> */}
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
{/* play button */}
    <button className = "btn btn-accent"
    disabled={!playersChosen}
    onClick={() => {
      setCurrentPlayers(
        availablePlayers.filter(
          x => x.checked
        ).map(
          x => ({
            name: x.name     
          })
        )
      );
      nav("../play")
    }}
    >
    
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
  </button>
  </div>

  <div className="form-control items-center">
      {/* add player card */}
      <div className="card bg-base-100 shadow-xl mb-3">
      <h2 className="card-title mb-2 px-2">
          Add Player
      </h2>
          <div className="card-body p-3 overflow-x-hidden mb-3">

              <div className="join">

                <input type="tex" 
                placeholder="Enter New Player Name" 
                value={newPlayerName}
                onChange={(e) => setNewPlayerName(e.target.value)}
                className="input input-bordered join-item w-full max-w-xs" />
                    <div className="items-center">
                    <button className="btn btn-accent join-item mb-3 mx-4"
                    disabled={newPlayerName.length === 0}
                    onClick={validateAndAddNewPlayer}

                    >Add Player
                    </button>
                    </div>

               </div>

            </div>
      </div>
  </div>

  <div className="form-control items-center">
      {/* Select player card */}
      <div className="card bg-base-100 shadow-xl mb-3">
      <h2 className="card-title mb-2 px-2">
          Select Player
      </h2>
        <div className="card-body p-3 overflow-x-hidden mb-3">
          
         {
          availablePlayers.map(
            x => (
              <div className="form-control"
              key={x.name}>
                <label className="label cursor-pointer">
                  <input type="checkbox" className="checkbox" 
                  checked={x.checked}
                  onChange={() => setAvailablePlayers(
                    availablePlayers.map( y => ({
                      ...y,
                      checked: y.name === x.name
                      ? !y.checked
                      : y.checked
                    }))
                  )
                }
                  />

                  <span className="flex label-text">
                    {x.name} 
                  </span>

                </label>
              </div>
            )
          )
         } 


        </div>
      </div>
      
      {/* choose character card */}
       <div className="flex card bg-base-100 shadow-xl mb-3 items-center">
       <h3 className="card-title mb-2 px-2">
                        Choose Your Character
           </h3>
        <div className="card-body p-3 overflow-x-hidden mb-3"> 
         <div>
          {
            availableCharacter.map(
              x => (
                <details className="collapse bg-base-200">
                  <summary className="collapse-title text-l font-medium">{x.characterName}</summary>
                <div className="collapse-content items-justify">
                <p>Health: {x.health} </p>
                <p>Combat Dice: {x.combatDice} </p>
                <p>Combat Modifier: {x.combatModifier} </p>
                <p>Special Skills: {x.specialSkill}</p>    
                <p>Special Notes: {x.specialNotes}</p>
               </div>             
                </details>
              )
            )
          }
        </div>
   {/* <select className="select select-bordered w-full max-w-xs">
                <option selected
                >Choose your Character</option>
                {
          availableCharacter.map(
            x => (
              <option> 
                <div
                className="card-body p-3 overflow-x-hidden-mb-3">
              <h3 className="card-title mb-2 px-2">{x.characterName}</h3>
              <span></span>{x.health}
              </div>
               </option>
            )
          )
         } </select>  */}

        </div>
        </div>
      </div>


      </div>


    );
  }