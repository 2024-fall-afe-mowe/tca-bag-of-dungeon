import { useNavigate } from "react-router-dom";
import { Play } from "./play";
import { Settings } from "./settings";
import { 
    LeaderboardEntry,
    GeneralFactsDisplay 
} from "./game-results";

interface HomeProps {
    leaderboardData: LeaderboardEntry[];
    generalFactsData: GeneralFactsDisplay;
    }

export const Home: React.FC<HomeProps> = ({
    leaderboardData,
    generalFactsData
}) => {

    const nav = useNavigate();

    return(
        //Navigation
  <div 
    className="form-control mb-3"
    > 
    <h1 className="text-2xL font-bold text-center">
      Home
    </h1>
    <div className = "text-center">
    <button className = "btn"
        onClick={() => nav("./")}>
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

    <button className = "btn"
        onClick={() => nav("./settings")}>
            <a>
            <svg xmlns="http://www.w3.org/2000/svg"  
            x="0px" y="0px" width="512px" height="392.34px"  
            enable-background="new 0 0 512 392.34"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 512 392.34">
            <g><path 
            d="M98.02 0h315.96c26.89 0 51.4 11.03 69.19 28.82C500.96 46.54 512 71.05 512 98.02V294.3c0 26.91-11.03 51.41-28.83 69.21-17.71 17.78-42.22 28.82-69.19 28.82H98.02c-26.97 0-51.48-11.04-69.23-28.79l-1.1-1.18C10.57 344.67 0 320.64 0 294.3V98.02c0-26.89 11.03-51.37 28.79-69.16l.07-.07C46.69 11.01 71.15 0 98.02 0zm225.71 208.59c12.37-7.99 12.34-16.89 0-23.96l-99.22-69.09c-10.09-6.32-20.6-2.61-20.32 10.55l.4 139c.86 14.27 9.01 18.19 21.02 11.59l98.12-68.09zm90.25-169.67H98.02c-16.29 0-31.07 6.62-41.73 17.3l-.07.07c-10.68 10.66-17.3 25.44-17.3 41.73V294.3c0 15.88 6.28 30.31 16.47 40.9l.9.84c10.71 10.71 25.49 17.37 41.73 17.37h315.96c16.24 0 31.02-6.66 41.73-17.37 10.74-10.66 17.37-25.44 17.37-41.74V98.02c0-16.24-6.66-31.02-17.37-41.73-10.66-10.75-25.44-17.37-41.73-17.37z"/></g></svg>
            </a> Play
    </button>


    </div>

    <div className="form-control items-center ">
        <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-3 overflow-x-hidden mb-3">
                        <h2 className="card-title">
                            General Facts
                        </h2>
                        <table 
                        className="table table-zebra">
                            <tbody>
                                <tr>
                                    <td>Total Games:</td>
                                    <th> {generalFactsData.totalGames} </th>
                                </tr>
                                <tr>
                                    <td>Last Played:</td>
                                    <th> {generalFactsData.lastPlayed} </th>
                                </tr>
                                <tr>
                                    <td>Shortest Game</td>
                                    <th> {generalFactsData.shortestGame} </th>
                                </tr>
                                <tr>
                                    <td>Longest Game</td>
                                    <th> {generalFactsData.longestGame} </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        </div> 
    </div>

    <div className="form-control items-center ">
        <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-3 overflow-x-hidden mb-3">
                        <h2 className="card-title">
                            Leaderboard
                        </h2>
                        {leaderboardData.length > 0
                        ? (<table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>AVG</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaderboardData.map(x =>(
                                    <tr key={x.name}>
                                        <td>
                                        {x.wins}
                                        </td>
                                        <td>
                                        {x.losses}
                                        </td>
                                        <td>
                                        {x.avg}
                                        </td>
                                        <td>
                                        {x.name}
                                        </td>
                                    </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        ): 
                        (<p>
                        Play a game to see the leaderboard!
                        </p>)}
                    </div>
        </div> 
    </div>  

    </div>    
        

    );
  }