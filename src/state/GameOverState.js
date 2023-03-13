export default class {
    #game;

    constructor(game) {
        this.#game = game;
    }

    update() {

    }

    draw() {
        for (const actor of Object.values(this.#game.actors)) {
            actor.draw();
        }

        this.#game.gameLayer.context.font = "30px 'New Tegomin'";
        this.#game.gameLayer.context.fillStyle = "black";
        this.#game.gameLayer.context.textAlign = "center";
        this.#game.gameLayer.context.fillText("Game Over", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 2.5);
        this.#game.gameLayer.context.fillText("Press Spacebar to restart", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 2);
        this.#game.gameLayer.context.fillText("or Esc to return to the menu", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 1.8);
    }

    togglePause() {

    }
}