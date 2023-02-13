import Layer from "./Layer.js";
import Snake from "./Snake.js";
import DIRECTIONS from "./DIRECTIONS.js";
import Food from "./Food.js";

export default class {
    #blockSize;
    #backgroundLayer;
    #gameLayer;
    #snake;
    #food;

    constructor(container) {
        this.#blockSize = 20;
        this.#backgroundLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "gray");
        this.#gameLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "transparent");
        this.#snake = new Snake(this.#gameLayer, this.#blockSize);
        this.#food = new Food(this.#gameLayer, this.#blockSize);

        document.addEventListener("keydown", event => {
            const key = event.key;
            if(key === "ArrowUp") {
                this.#snake.changeDirection(DIRECTIONS.UP);
            } else if(key === "ArrowLeft") {
                this.#snake.changeDirection(DIRECTIONS.LEFT);
            }else if(key === "ArrowDown") {
                this.#snake.changeDirection(DIRECTIONS.DOWN);
            }else if(key === "ArrowRight") {
                this.#snake.changeDirection(DIRECTIONS.RIGHT);
            }
        })
    }

    draw() {
        this.#gameLayer.clear();
        this.#snake.draw();
        this.#food.draw();
    }

    update() {
        this.#snake.update();
        if (this.#snake.isEat(this.#food.position)) {
            this.#food.changePosition(this.#snake.body);
        }
    }
}