import Game from "./src/Game.js";
import GameLoop from "./src/GameLoop.js";

const container = document.getElementById("container")
const game = new Game(container);
const loop = new GameLoop(game);
loop.start();


