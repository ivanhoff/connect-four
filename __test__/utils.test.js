const { readyPlayer, createEmptyBoard, nextTurn, checkWinnerHorizontal, checkWinnerVertical, checkWinnerDiagonalDesc, checkWinnerDiagonalAsc, winnerExist, startGame } = require('../utils');

beforeEach(() => {
    winnerExist.value = false;
});

describe('NoWinner', () => {
    describe('Diag Desc', () => {
        it('daigDesc 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigDesc 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigDesc 3', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 2, 0, 0, 0],
                [1, 0, 0, 0, 2, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigDesc 4', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 1, 0, 2, 0, 0, 0],
                [1, 0, 0, 0, 2, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 1);
            expect(winnerExist.value).toBe(false);
        });
    })
    describe('Diag Asc', () => {
        it('daigAsc 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0]
              ];
            checkWinnerDiagonalAsc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigAsc 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 2, 0],
                [0, 0, 0, 0, 2, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0]
              ];
            checkWinnerDiagonalAsc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigAsc 3', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0]
              ];
            checkWinnerDiagonalAsc(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('daigAsc 4', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0, 1, 0]
              ];
            checkWinnerDiagonalAsc(matrix, 1);
            expect(winnerExist.value).toBe(false);
        });
    })
    describe('Horizontal', () => {
        it('hor 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 2, 2, 0]
              ];
            checkWinnerHorizontal(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('hor 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 2, 2, 1, 2, 2, 0]
                ];
            checkWinnerHorizontal(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });     
        it('hor 3', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 1, 1, 1, 0]
                ];
            checkWinnerHorizontal(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
    })
    describe('Vertical', () => {
        it('vert 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0]
              ];
            checkWinnerVertical(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('vert 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0]
              ];
            checkWinnerVertical(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
        it('vert 3', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0]
              ];
            checkWinnerVertical(matrix, 2);
            expect(winnerExist.value).toBe(false);
        });
    })
});

describe('Winner', () => {
    describe('Diag Desc', () => {
        it('daigDesc 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
        it('daigDesc 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
        it('daigDesc 3', () => {
            const matrix = [
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0],
                [0, 0, 0, 0, 0, 2, 0],
                [0, 0, 0, 0, 0, 0, 2],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
              ];
            checkWinnerDiagonalDesc(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
    })
    describe('Diag Asc', () => {
        it('daigAsc 1', () => {
            const matrix = [
                [0, 0, 0, 2, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 2, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
              ];
            checkWinnerDiagonalAsc(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
        it('daigAsc 2', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1, 0, 0],
                [0, 0, 0, 1, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0]
            ];
            checkWinnerDiagonalAsc(matrix, 1);
            expect(winnerExist.value).toBe(true);
        });
        it('daigAsc 3', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 2],
                [0, 0, 1, 1, 1, 2, 1],
                [0, 0, 1, 2, 2, 2, 1],
                [1, 0, 2, 2, 1, 2, 2],
                [1, 1, 1, 2, 2, 1, 2]
            ];
            checkWinnerDiagonalAsc(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
    })
    describe('Hotizontal', () => {
        it('hor 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 2, 2, 2, 2, 0, 0]
              ];
            checkWinnerHorizontal(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
        it('hor 2', () => {
            const matrix = [
                [0, 2, 2, 2, 2, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
              ];
            checkWinnerHorizontal(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
    })
    describe('Vertical', () => {
        it('vert 1', () => {
            const matrix = [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0]
              ];
            checkWinnerVertical(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
        it('vert 2', () => {
            const matrix = [
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
              ];
            checkWinnerVertical(matrix, 2);
            expect(winnerExist.value).toBe(true);
        });
    })
});

describe('GamePlayTest', () => {
    it('New Board', () => {
        const matrix = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ];
        const board = createEmptyBoard(7, 6);
        expect(board).toEqual(matrix);
    });
    it('Draw', () => {
        const matrix = [
            [1, 2, 1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1, 2, 2],
            [2, 1, 2, 1, 2, 1, 1],
            [2, 1, 2, 1, 2, 1, 2],
            [1, 2, 1, 2, 1, 2, 1],
            [1, 2, 1, 2, 1, 2, 2]
        ];
        nextTurn(matrix);
        expect(winnerExist.value).toBeUndefined();
    })

});