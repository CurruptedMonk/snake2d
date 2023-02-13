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
        this.#game.gameLayer.context.fillText("Game paused", this.#game.gameLayer.width /2, this.#game.gameLayer.height / 2);
    }

    togglePause() {
        this.#game.setState(this.#game.runningState);
    }
}