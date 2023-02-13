export default class {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    isEqual(otherPosition) {
        return this.#x === otherPosition.x
            && this.#y === otherPosition.y;
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }
}