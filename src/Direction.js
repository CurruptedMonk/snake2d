import DIRECTIONS from "./DIRECTIONS.js";
import Position from "./Position.js";

export default class {
    #step;
    #position;
    /* #nextPosition used to fixes a bug,
    * where a quick change of direction could cause the snake to scatter in the opposite direction
    */
    #nextPosition;

    constructor(step) {
        this.#step = step;
        this.#position = new Position(this.#step, 0);
        this.#nextPosition = new Position(this.#position.x, this.#position.y)
    }

    set(direction) {
        if (direction === DIRECTIONS.UP && this.#position.y !== this.#step) {
            this.#nextPosition = new Position(0, -this.#step);
            return;
        }
        if (direction === DIRECTIONS.LEFT && this.#position.x !== this.#step) {
            this.#nextPosition = new Position(-this.#step, 0);
            return;
        }
        if (direction === DIRECTIONS.DOWN && this.#position.y !== -this.#step) {
            this.#nextPosition = new Position(0, this.#step);
            return;
        }
        if (direction === DIRECTIONS.RIGHT && this.#position.x !== -this.#step) {
            this.#nextPosition = new Position(this.#step, 0);
        }
    }

    update() {
        this.#position = new Position(
            this.#nextPosition.x,
            this.#nextPosition.y
        );
    }

    get position() {
        return this.#position;
    }

}