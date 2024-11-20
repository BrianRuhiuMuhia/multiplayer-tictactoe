const gameState={
    board:Array(9).fill(null),
    playerTurn:true
}
function resetGame()
{
    gameStates.board=Array(9).fill(null);
    gameStates.playerTurn=true
}
function calculateWinner(board) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of winningCombinations) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }
  
function isBoardFull(board) {
  return board.every((cell) => cell !== null);
}

function isGameDraw(board) {
  return isBoardFull(board) && !calculateWinner(board);
}

function getGameStatus(board) {
  const winner = calculateWinner(board);
  if (winner) {
    return `Player ${winner} wins!`;
  } else if (isGameDraw(board)) {
    return 'It\'s a draw!';
  } else {
    return 'Game in progress...';
  }
}

module.exports = { gameState, resetGame, calculateWinner, isBoardFull, isGameDraw, getGameStatus };
