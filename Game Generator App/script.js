//list of games to generate//

const games = [
  'Helldivers 2',
  'The Elder Scrolls V: Skyrim Special Edition',
  'Cyberpunk 2077',
  'The Witcher 3: Wild Hunt',
  'Grand Theft Auto V',
  'Starfield',
  'Dead By Daylight',
  'Ark: Survival Evolved',
  'Assassins Creed Valhalla',
  'Red Dead Redemption 2',
];

//list of games are stored in this//

const usedGames = new Set();

//getting the game element//

const gameElement = document.getElementById('game');

//function to make the games generate randomly//

function generateGames() {
  //if the index of the listed games exceeds the length of the set, then clear the set and start again//

  if (usedGames.size >= games.length) {
    usedGames.clear();
  }
  //if the set still has a game left, continue to generate//

  while (true) {
    const randomGame = Math.floor(Math.random() * games.length);
    if (usedGames.has(randomGame)) continue;

    //set the html element of game to = the value of a random game//

    const game = games[randomGame];
    gameElement.innerHTML = game;
    usedGames.add(randomGame);
    cover(randomGame);
    break;
  }
}

//function to set the cover of the game to be visible when = to the title of the game//

function cover(randomGame) {
  document.querySelectorAll('img').forEach((i) => (i.style.display = ''));
  document.getElementById(`game${randomGame}`).style.display = 'block';
}
