export default class {
    #score;
    #layer;

    constructor(layer) {
        this.#score = 0;
        this.#layer = layer;
    }

    increase() {
        this.#score++;
    }

    update() {

    }

    draw() {
        this.#layer.context.font = "30px 'New Tegomin'";
        this.#layer.context.fillStyle = "black";
        this.#layer.context.textAlign = "center";
        this.#layer.context.fillText(`Score: ${this.#score}`, this.#layer.width /10, this.#layer.height / 16);
    }
}