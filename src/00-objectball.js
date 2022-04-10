function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Mason Plumlee": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                },
                "Jason Terry": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamdunks: 15,
                }

            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Black", "White"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

const game = gameObject();
const homeTeam = game.home;
const awayTeam = game.away;
const players = [game.home.players, game.away.players];

function allPlayers(){
    const all = players.map(function (team){
        const newArray = [];
        for(const player in team) {
            newArray.push({nameOfPlayer: player, ...team[player]});
        }   
        return newArray;
    })
    return all.flat();
}

function findPlayer(playerName){
    return allPlayers().find(player => {
        return player.nameOfPlayer === playerName
    });
}

function numPointsScored(playersName){
    return findPlayer(playersName).points;
}

function shoeSize(playerName){
   return findPlayer(playerName).shoe;
}

function playerStats(playerName) {
    return findPlayer(playersName).players;
}

function teamColors(teamName) {
   if(teamName === homeTeam.teamName) {
       return homeTeam.colors;
   }
   return awayTeam.colors;
}

const teamNames = () => {
    const teamArray = Object.values(gameObject()).map(function (go) {
        return [go.teamName][0];
    });
    return teamArray;
};

function playerNumbers(teamName) {
    if (teamName === homeTeamName) {
        const homeNumbers = Object.values(homePlayers).map(function (hp) {
            return [hp.number];
        })
        return homeNumbers.flat();
    }
    else (teamName === awayTeamName) 
        const awayNumbers = Object.values(awayPlayers).map(function (ap) {
            return [ap.number];
        })
            return awayNumbers.flat();
    }

function bigShoeRebounds() { 
    const allShoeArray = Object.values(allPlayers()).map(function (ap) { return [ap.shoe] }).flat()
    for (const player in allPlayers()) {
        if (allPlayers()[player].shoe === Math.max(...allShoeArray)) {
            return allPlayers()[player].rebounds;
        }
    }
}