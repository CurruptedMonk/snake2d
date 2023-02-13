import Layer from "./Layer.js";
import Snake from "./actors/Snake.js";
import DIRECTIONS from "./DIRECTIONS.js";
import Food from "./actors/Food.js";

export default class {
    #blockSize;
    #backgroundLayer;
    #gameLayer;
    #actors;

    constructor(container) {
        this.#blockSize = 20;
        this.#backgroundLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "gray");
        this.#gameLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "transparent");
        this.#actors = Object.freeze({
                snake: new Snake(this.#gameLayer, this.#blockSize),
                food: new Food(this.#gameLayer, this.#blockSize)
            }
        )

        document.addEventListener("keydown", event => {
            const key = event.key;
            if(key === "ArrowUp") {
                this.#actors.snake.changeDirection(DIRECTIONS.UP);
            } else if(key === "ArrowLeft") {
                this.#actors.snake.changeDirection(DIRECTIONS.LEFT);
            }else if(key === "ArrowDown") {
                this.#actors.snake.changeDirection(DIRECTIONS.DOWN);
            }else if(key === "ArrowRight") {
                this.#actors.snake.changeDirection(DIRECTIONS.RIGHT);
            }
        })
    }

    draw() {
        this.#gameLayer.clear();
        for (const actor of Object.values(this.#actors)) {
            actor.draw()
        }
    }

    update() {
        for (const actor of Object.values(this.#actors)) {
            actor.update();
        }

        if (this.#actors.snake.isEat(this.#actors.food.position)) {
            this.#actors.food.changePosition(this.#actors.snake.body);
            this.#actors.snake.growUp();
        }
        if(this.#actors.snake.isDeathCollision()) {
            console.log("death")
        }
    }
}