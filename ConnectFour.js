const prompt = require("prompt-sync")({sigint:true});

function createEmptyBoard(x, y) {
    const board = Array(y).fill(null).map(() => Array(x).fill(0));
    return board;
}

const players = [
    {name: 'Player One', number: 1},
    {name: 'Player Two', number: 2}
]

let turn = 1
let winnerExist = false

function readyPlayer(board, player) {
    const col = prompt(`${players[player - 1].name}, select column index: `)
    if (col < board[0].length && col >= 0) {    
        for (let i = board.length - 1; i >= 0; i--){
            if (board[i][col] == 0) {
                board[i][col] = player;
                turn += 1
                break;
            }
            if (board[0][col] != 0 && board[0].indexOf(0) != -1) {
                if (col == '') {
                    console.log(`No value inserted.`);
                    readyPlayer(board, player);
                } else {
                console.log(`${players[player - 1].name}, column is filled up, please select another column.`);
                readyPlayer(board, player);
                break;
                }
            }
        }
    } else {
        console.log(`Invalid value. Insert numbers between 0 and ${board[0].length - 1}.`);
        readyPlayer(board, player);
    }
    console.clear();
    console.table(board);
    checkWinner(board, player);
    gameOver(board);
}


// WINNER CHECK
// **************************************************************************

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
        }
        if (count >= 4) {
            winner(player);
            break;
        }
    }
}

function checkWinnerDiagonalDesc(board, player) {
    for (let k = 2; k >= 0 ; k--) {
        let count = 0
        for (let i = k, j = 0; i <= 5; i++, j++) {
            if (board[i][j] === player) {
                count += 1;
            }
        }
        if (count >= 4) {
            winner(player);
            break;
        }
    }
    for (let k = 1; k <= 3 ; k++) {
        let count = 0
        for (let i = 0, j = k; j <= 6; i++, j++) {
            if (board[i][j] === player) {
                count += 1;
            }
        }
        if (count >= 4) {
            winner(player);
            break;
        }
    }
}

function checkWinnerDiagonalAsc(board, player) {
    for (let k = 3; k <= 5 ; k++) {
        let count =0
        for (let i = 0, j = k; j >= 0; i++, j--) {
            if (board[i][j] === player) {
                count += 1;
            }
        }
        if (count >= 4) {
            winner(player);
            break;
        }
    }
    for (let k = 0; k <= 2 ; k++) {
        let count = 0
        for (let i = k, j = 6; i <= 5; i++, j--) {
            if (board[i][j] === player) {
                count += 1;
            }
        }
        if (count >= 4) {
            winner(player);
            break;
        }
    }
}


function checkWinner(board, player) {
    checkWinnerHorizontal(board, player);
     if (!winnerExist) {
         checkWinnerVertical(board, player);
         if (!winnerExist) {
             checkWinnerDiagonalDesc(board, player);
             if (!winnerExist) {
                 checkWinnerDiagonalAsc(board, player);
             }
         }
     }
}

// **************************************************************************


function winner(player) {
    winnerExist = true
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
}


function gameOver(board) {
    if (board[0].indexOf(0) == -1 && winnerExist === false) {
        console.log('--------------> D R A W <--------------');
        console.log('---------> G A M E   O V E R <---------');
    } else {
        if (turn % 2 == 0 && winnerExist === false) {
            readyPlayer(board, players[1].number);
        } else if (winnerExist === false) {
            readyPlayer(board, players[0].number);
        }
    }
}

function startGame() {
    const board = createEmptyBoard(7, 6);
    console.clear();
    console.table(board);
    readyPlayer(board, players[0].number);
}

///// START GAME \\\\\
startGame();
