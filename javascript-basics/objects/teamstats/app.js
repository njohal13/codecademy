const team = {
    _players: [
      {firstName: 'Steph', lastName: 'Curry',
      age: 33},
      {firstName: 'Jordan', lastName: 'Poole',
      age: 22},
      {firstName: 'Klay', lastName: 'Thompson',
      age: 30}
      ],
    _games:[
      {opponent: 'Nuggets', teamPoints: 90,
      opponentPoints: 89},
      {opponent: 'Suns', teamPoints: 99,
      opponentPoints: 97},
      {opponent: 'Nets', teamPoints: 120,
      opponentPoints: 80}
    ],
  
    get players(){
      return this._players
    },
    get games(){
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {firstName: newFirstName,
      lastName: newLastName,
      age: newAge};
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints};
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76)
  console.log(team._players)
  
  team.addGame('Titans', 100, 98)
  console.log(team._games)