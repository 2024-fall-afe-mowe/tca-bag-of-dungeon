 import { durationFormatter } from 'human-readable';

const formatGameDuration = durationFormatter<string>();

const formatLastPlayed = durationFormatter<string>({
    allowMultiples: ["y", "mo", "d"]
}); 


export type GameResult = {
    startTime: string;
    endTime: string;

    winner: string;
    players: string[];
};

export type LeaderboardEntry = {
    wins: number;
    losses: number;
    avg: string;
    name: string;
};
{/* game data export func */}
export type BossData = {
    bossName: string;
    health: number;
    combatDice: number;
    combatModifier: number;
    specialNotes: string;
};

export type Character = {
    name: string;
    health: number;
    combatDice: number;
    combatModifier: number;
    specialSkill: string;
    specialNotes: string
}

export type Monster = {
        monsterName: string;
        health: number;
        combatDice: number;
        combatModifier: number;
}
{/* end of game data exports */}

export type CurrentPlayer = {
    name: string;
    character: Character;
};

export type GeneralFactsDisplay = {
    lastPlayed: string 
    , totalGames: number 
    , shortestGame: string
    , longestGame: string
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

export const getPreviousPlayers = (results: GameResult[]) => {
    
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
    
   export const getGeneralFacts = (results: GameResult[]): GeneralFactsDisplay => {
    
        const now = Date.now();
        const gameEndTimesInMilliseconds = results.map(x => Date.parse(x.endTime));
    
        const lastPlayedInMilliseconds = now - Math.max(...gameEndTimesInMilliseconds);
        const lastPlayedInDays = lastPlayedInMilliseconds / 1000 / 60 / 60 / 24;
    
        const gameDurationsInMilliseconds = results.map(
            x => Date.parse(x.endTime) - Date.parse(x.startTime)
        );
    
        const shortestGameInMilliseconds = Math.min(...gameDurationsInMilliseconds);
        const shortestGameInMinutes = shortestGameInMilliseconds / 1000 / 60;
    
        const longestGameInMilliseconds = Math.max(...gameDurationsInMilliseconds);
        const longestGameInMinutes = longestGameInMilliseconds / 1000 / 60;
    
        return {
            lastPlayed: `${lastPlayedInDays.toFixed(0)} day(s) ago`
            , totalGames: results.length
            , shortestGame: `${shortestGameInMinutes.toFixed(1)} minutes`
            , longestGame: `${longestGameInMinutes.toFixed(1)} minutes`
        };
    };
    
    
{/* game database */}
export const bossType: BossData[] = [
    {
    bossName: "Reacher",
    health: 15,
    combatDice: 2,
    combatModifier: 7,
    specialNotes: "This monster has long tendrils with a sting range of 4 tiles, inflicting half damage to all."
    },
    {
    bossName: "Mirror Monster",
    health: 12,
    combatDice: 4,
    combatModifier: 2,
    specialNotes: "This monster mirrors the strength and health of its opponent."
    },
    {
    bossName: "Red Dragon",
    health: 20,
    combatDice: 4,
    combatModifier: 0,
    specialNotes: "This monster guards the exit of the Dungeon. She is immune to arrows, but never leaves her post at the Exit Tile."
    },

];

export const availableCharacter: Character[] = [
    {
    name: "Tamara the Fighter",
    health: 10,
    combatDice: 2,
    combatModifier: 2,
    specialSkill: "Lethal Blow: Once per game you may double your combat roll result.",
    specialNotes: "Fearless, fast, and skilled with her blade, Tamara is her guild's finest sword fighter."
    },
    {
    name: "Sirrus the Fighter",
    health: 10,
    combatDice: 2,
    combatModifier: 2,
    specialSkill: "Lethal Blow: Once per game you may double your combat roll result.",
    specialNotes: "Sirrus is a skilled warrior and renowned blademaster, brace and capable in battle."
    },
    {
    name: "Galhorn the Elf",
    health: 9,
    combatDice: 2,
    combatModifier: 1,
    specialSkill: "Dead-eye: Inflict an instant kill when you roll a 6 on a bow attack.",
    specialNotes: "Galhorn is a master archer, keen-eyed and quick. He is a former Royal Protector at Calen Taur."
    },
    {  
    name: "Alendra the Elf",
    health: 9,
    combatDice: 2,
    combatModifier: 1,
    specialSkill: "Dead-eye: Inflict an instant kill when you roll a 6 on a bow attack.",
    specialNotes: "Alendra is fleet-footed and a skilled archer. She is a former Calen Taur watch commander."
    }, 
    {  
    name: "Marria the Dwarf",
    health: 12,
    combatDice: 2,
    combatModifier: 3,
    specialSkill: "Brace: Once per game you may block one attack, taking no damage.",
    specialNotes: "Stout-hearted and steadfast in battle, Marria's axe skills are legendary among her clan."
    }, 
    {  
    name: "Duric the Dwarf",
    health: 12,
    combatDice: 2,
    combatModifier: 3,
    specialSkill: "Brace: Once per game you may block one attack, taking no damage.",
    specialNotes: "Enemies too many to count have fallen at the axe of Duric the Dwarf, former head of the King's Guard."
    }, 
    {  
    name: "Tarak the Healer",
    health: 9,
    combatDice: 2,
    combatModifier: 0,
    specialSkill: "Renew: Spend 3 AP to give a character on your tile 2 dice of health. Max 3 heals per game.",
    specialNotes: "Tarak learned his art in lands far and wide. There are few wounds and woes he cannot mend."
    }, 
    {  
    name: "Rill the Healer",
    health: 9,
    combatDice: 2,
    combatModifier: 0,
    specialSkill: "Renew: Spend 3 AP to give a character on your tile 2 dice of health. Max 3 heals per game.",
    specialNotes: "Rill is wise in the lore of medicine, a gifted 7th daughter from the line of the healer folk."
    }
]

export const monsterList: Monster[] = [
    {
    monsterName: "Zombie",
    health: 15,
    combatDice: 2,
    combatModifier:2
    },
    {monsterName:"Goblin", 
    health:5, 
    combatDice:1, 
    combatModifier:1
    },
    {monsterName:"Troll", 
    health:10, 
    combatDice:2, 
    combatModifier:4
    },
    {monsterName:"Minotaur", 
    health:11, 
    combatDice:2, 
    combatModifier:5
    },
    {monsterName:"Mummy", 
    health:7, 
    combatDice:1, 
    combatModifier:4
    },
    {monsterName:"Werewolf", 
    health:10, 
    combatDice:2, 
    combatModifier:3
    },
    {monsterName:"Monk", 
    health:8, 
    combatDice:2, 
    combatModifier:4
    },
    {monsterName:"Skeleton", 
    health:12, 
    combatDice:2, 
    combatModifier:1
    },
    {monsterName:"Mud Monster", 
    health:9, 
    combatDice:2, 
    combatModifier:2
    },
    {monsterName:"Giant Snake", 
    health:13, 
    combatDice:2, 
    combatModifier:6
    }
]