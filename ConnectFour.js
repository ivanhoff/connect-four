const prompt = require("prompt-sync")({sigint:true});
const { startGame, playAgain } = require('./utils');

let playing = true;

while (playing) {
    startGame();
    if (playAgain() === false) {
        playing = false;
    }
}