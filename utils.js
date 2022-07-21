const prompt = require("prompt-sync")({sigint:true});
/* -------------------------------------------------------------------------- */
/*                                 ConnectFour                                */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Initial Conditions ----------------------------- */
const players = [
    {name: 'Player One', number: 1},
    {name: 'Player Two', number: 2}
];
let turn = 1;
let winnerExist = {value: false};

/* ------------------------------ Game Starter ------------------------------ */
function createEmptyBoard(x, y) {
    const board = Array(y).fill(null).map(() => Array(x).fill(0));
    return board;
}

function startGame() {
    const board = createEmptyBoard(7, 6);
    console.clear();
    console.table(board);
    readyPlayer(board, players[0].number);
}

/* ----------------------------- Players Inputs ----------------------------- */
function readyPlayer(board, player) {
    let invalidValue = true;
    while (invalidValue) {
        const col = prompt(`${players[player - 1].name}, select column index: `)
        if (col < board[0].length && col >= 0) {    
            for (let i = board.length - 1; i >= 0; i--){
                if (board[i][col] == 0) {
                    board[i][col] = player;
                    turn += 1;
                    invalidValue = false;
                    break;
                }
                if (board[0][col] != 0 && board[0].indexOf(0) != -1) {
                    if (col == '') {
                        console.log(`No value inserted.`);
                        break;
                    } else {
                        console.log(`${players[player - 1].name}, column is filled up, please select another column.`);
                        break;
                    }
                }
            }
        } else {
            console.log(`Invalid value. Insert numbers between 0 and ${board[0].length - 1}.`);
        }
    }
    console.clear();
    console.table(board);
    checkWinner(board, player);
    nextTurn(board);
}

/* ---------------------------------- Turns --------------------------------- */
function nextTurn(board) {
    if (board[0].indexOf(0) == -1 && !winnerExist.value) {
        winnerExist.value = undefined;
        console.log('--------------> D R A W <--------------');
        console.log('---------> G A M E   O V E R <---------');
        console.log('\n\n');
    } else {
        if (turn % 2 == 0 && !winnerExist.value) {
            readyPlayer(board, players[1].number);
        } else if (!winnerExist.value) {
            readyPlayer(board, players[0].number);
        }
    }
}

/* ------------------------------ Winner Check ------------------------------ */
function checkWinnerHorizontal(board, player) {
    let count = 0
    for (let i = 0; i < board.length; i++) {
        count = 0
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
}

function checkWinnerVertical(board, player) {
    let count = 0
    for (let j = 0; j < board[0].length; j++) {
        count = 0
        for (let i = 0; i < board.length; i++) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
}

function checkWinnerDiagonalDesc(board, player) {
    for (let k = 2; k >= 0 ; k--) {
        let count = 0
        for (let i = k, j = 0; i <= 5; i++, j++) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
    for (let k = 1; k <= 3 ; k++) {
        let count = 0
        for (let i = 0, j = k; j <= 6; i++, j++) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
}

function checkWinnerDiagonalAsc(board, player) {
    for (let k = 3; k <= 5 ; k++) {
        let count =0
        for (let i = 0, j = k; j >= 0; i++, j--) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
    for (let k = 0; k <= 2 ; k++) {
        let count = 0
        for (let i = k, j = 6; i <= 5; i++, j--) {
            if (board[i][j] === player) {
                count += 1;
            } else {
                count = 0;
            }
            if (count >= 4) {
                winner(player);
                break;
            }
        }
    }
}

function checkWinner(board, player) {
    checkWinnerHorizontal(board, player);
     if (!winnerExist.value) {
         checkWinnerVertical(board, player);
         if (!winnerExist.value) {
             checkWinnerDiagonalDesc(board, player);
             if (!winnerExist.value) {
                 checkWinnerDiagonalAsc(board, player);
             }
         }
     }
}

/* --------------------------------- Winner --------------------------------- */
function winner(player) {
    winnerExist.value = true
    console.log(`>>> ${players[player - 1].name} WINS! <<<`);
    console.log(`     ____________
    '._========_.'
    .-|:       |-.
   |( |.       | )|
    '-|:.      |-'
      ':::.   /
       ':::..'
         )  (
       _.'  '._
    |""""""""""""|  
    """"""""""""""`);
    console.log('\n\n');
}

/* ------------------------------- Play Again? ------------------------------ */
function playAgain() {
    let invalidAnswer = true
    while (invalidAnswer) {
        let answer = prompt('Do you want to play again? (yes/no): ')
        answer = answer.trim().toLowerCase();
        if(answer === 'yes' || answer === 'y') {
            turn = 1;
            winnerExist.value = false;
            invalidAnswer = false;
            return true;
        } else if(answer === 'no' || answer === 'n') {
            console.clear();
            console.log('\nBye, hope you enjoyed it!\n');
            invalidAnswer = false;
            return false;
        } else {
            console.log(`\n"${answer}" is not a valid answer.`);
        } 
    }
}
/* -------------------------------------------------------------------------- */


/* --------------------------------- Exports -------------------------------- */
module.exports = { startGame, readyPlayer, playAgain, createEmptyBoard, nextTurn, checkWinnerHorizontal, checkWinnerVertical, checkWinnerDiagonalDesc, checkWinnerDiagonalAsc, winnerExist}