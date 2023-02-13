export default class {
    #game;

    constructor(game) {
        this.#game = game;
    }

    update() {

    }

    draw() {
        this.#game.gameLayer.context.font = "30px 'New Tegomin'";
        this.#game.gameLayer.context.fillStyle = "black";
        this.#game.gameLayer.context.textAlign = "center";
        this.#game.gameLayer.context.fillText("Press SPACEBAR to start or restart", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 3);
        this.#game.gameLayer.context.fillText("P  to pause, arrow keys to move", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 2.5);
        this.#game.gameLayer.context.fillText("and Esc to return to the menu", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 2.1);
    }

    togglePause() {

    }
}