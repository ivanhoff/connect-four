const { startGame, playAgain } = require('./utils');

let playing = true;

while (playing) {
    startGame();
    if (!playAgain()) {
        playing = false;
    }
}