const { Server } =require("socket.io");
const expressServer=require("../app.js")
const {gameState,resetGame,calculateWinner}=require("../gameLogic/game.js")
const socketIO=new Server(expressServer,{
    cors:{
        origin:"localhost",
        methods: ["GET", "POST"],
    }
})
socketIO.on("connection",(socket)=>{
    console.log("Client connected");
socketIO.emit("gameState",gameState)

 socket.on('makeMove', (index) => {
    if (gameState.board[index] || calculateWinner(gameState.board)) return;
    gameState.board[index] = gameState.xIsNext ? 'X' : 'O';
    gameState.xIsNext = !gameState.xIsNext;
    socketIO.emit('gameState', gameState);
  });
  socket.on('restartGame', () => {
    resetGame();
    io.emit('gameState', gameState);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});
