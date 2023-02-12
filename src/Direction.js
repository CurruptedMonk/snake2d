import DIRECTIONS from "./DIRECTIONS.js";

export default class {
    #step;
    #x;
    #y;
    /* #nextX and #nextY used to fixes a bug,
    * where a quick change of direction could cause the snake to scatter in the opposite direction
    */
    #nextX;
    #nextY;

    constructor(step) {
        this.#step = step;
        this.#x = this.#step;
        this.#y = 0
        this.#nextX = this.#x;
        this.#nextY = this.#y;
    }

    set(direction) {
        if (direction === DIRECTIONS.UP && this.#y !== this.#step) {
            this.#nextX = 0;
            this.#nextY = -this.#step;
            return;
        }
        if (direction === DIRECTIONS.LEFT && this.#x !== this.#step) {
            this.#nextX = -this.#step;
            this.#nextY = 0;
            return;
        }
        if (direction === DIRECTIONS.DOWN && this.#y !== -this.#step) {
            this.#nextX = 0;
            this.#nextY = this.#step;
            return;
        }
        if (direction === DIRECTIONS.RIGHT && this.#x !== -this.#step) {
            this.#nextX = this.#step;
            this.#nextY = 0;
        }
    }

    update() {
        this.#x = this.#nextX;
        this.#y = this.#nextY;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}