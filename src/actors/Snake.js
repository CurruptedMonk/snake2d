import Direction from "../Direction.js";
import Block from "../Block.js";
import Position from "../Position.js";

export default class {
    #layer;
    #blockSize;
    #direction;
    #body;
    #position;
    #cuttedTail

    constructor(layer, blockSize) {
        this.#layer = layer;
        this.#blockSize = blockSize;
        this.#position = new Position(
            this.#layer.width /2,
            this.#layer.width / 2
        )
        this.#direction = new Direction(blockSize);
        this.#body = [this.#createHead()];
    }

    update() {
        this.#direction.update();
        this.#updateHeadCoordinates();

        this.#body.unshift(this.#createHead());
        this.#cuttedTail = this.#body.pop();
    }

    draw() {
        this.#body.forEach((piece, index) => {
            index === 0
                ? piece.draw(this.#layer.context, "black")
                : piece.draw(this.#layer.context, "#2c2e30");
        });
    }

    changeDirection(direction) {
       this.#direction.set(direction);
    }

    isEat(foodPosition) {
        return this.#position.isEqual(foodPosition);
    }

    growUp() {
        this.#body.push(this.#cuttedTail);
    }

    isDeathCollision() {
        const head = this.#body[0];
        const headlessBody = this.#body.slice(1);

        return this.#isSelfCollision(head, headlessBody) || this.#isWallCollision(head);
    }

    #isSelfCollision(head, headlessBody) {
        return headlessBody.some(block => block.checkPositionMatches(head.position));
    }

    #isWallCollision(head) {
        return head.position.x < 0
            || head.position.y < 0
            || head.position.x > this.#layer.width - this.#blockSize
            || head.position.y > this.#layer.height - this.#blockSize;
    }

    get body() {
        return this.#body;
    }

    #updateHeadCoordinates() {
        const newX = this.#position.x + this.#direction.position.x;
        const newY = this.#position.y + this.#direction.position.y;

        this.#position = new Position(
            newX,
            newY
        )
    }

    #createHead() {
        return Block.create(this.#position, this.#blockSize);
    }
}


