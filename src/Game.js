import Layer from "./Layer.js";
import Snake from "./Snake.js";

export default class {
    #blockSize;
    #backgroundLayer;
    #gameLayer;
    #snake;

    constructor(container) {
        this.#blockSize = 20;
        this.#backgroundLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "gray");
        this.#gameLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "transparent");
        this.#snake = new Snake(this.#gameLayer, this.#blockSize);
    }

    draw() {
        this.#gameLayer.clear();
        this.#snake.draw();
    }

    update() {
        this.#snake.update();
    }
}