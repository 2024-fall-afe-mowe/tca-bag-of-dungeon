export type GameResult = {
    winner: string;
    players: string[];
};

export type LeaderboardEntry = {
    wins: number;
    losses: number;
    avg: string;
    name: string;
};

export const getLeaderboard = (
    results: GameResult[]
): LeaderboardEntry[] => {
    const lbEntries = getPreviousPlayers(results).map((player) =>
    getLeaderboardEntry(results, player)
    );

    const playersWithWins = lbEntries
        .filter((x) => x.wins > 0)
        .sort(
            (a, b) =>
            (parseFloat(b.avg) * 1000 + b.wins + b.losses)
                - (parseFloat(a.avg) * 1000 + a.wins + a.losses)
        );

    const playersWithoutWins = lbEntries
        .filter((x) => x.wins === 0 )
        .sort(
            (a, b) =>
            (parseFloat(b.avg) * 1000 + b.wins + b.losses)
                - (parseFloat(a.avg) * 1000 + a.wins + a.losses)  
        );
        return [
            ...playersWithWins, 
            ...playersWithoutWins
        ];
    };

    const getPreviousPlayers = (results: GameResult[]) => {
    
        const previousPlayers = results.flatMap(
            x => x.players
        );
    
        return(
            [
                ...new Set(previousPlayers)
            ].sort(
                (a, b) => a.localeCompare(b)
            )
        );
    };

    const getLeaderboardEntry = (
        results: GameResult[],
        player: string
    ): LeaderboardEntry => {
        const playerWins = results.filter(
            x => x.winner === player
        ).length;
    
    const playerGames = results.filter(
        x => x.players.some(
            y => y === player
        )   
    ).length;

    return {
        wins: playerWins,
        losses: playerGames - playerWins,
        avg: playerGames > 0 
            ? (playerWins / playerGames).toFixed(3):"0.000",
        name: player
    };
    };