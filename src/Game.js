import Layer from "./Layer.js";
import Snake from "./actors/Snake.js";
import DIRECTIONS from "./DIRECTIONS.js";
import Food from "./actors/Food.js";
import RunningState from "./state/RunningState.js";
import GameOverState from "./state/GameOverState.js";
import PauseState from "./state/PauseState.js";
import StartMenuState from "./state/StartMenuState.js";
import Score from "./Score.js";

export default class {
    #blockSize;
    #backgroundLayer;
    #gameLayer;
    #actors;
    #startMenuState;
    #runningState;
    #gameOverState;
    #currentState;
    #pauseState;

    constructor(container) {
        this.#blockSize = 20;
        this.#backgroundLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "gray");
        this.#gameLayer = new Layer(container, this.#blockSize*30, this.#blockSize*30, "transparent");

        this.#startMenuState = new StartMenuState(this);
        this.#pauseState = new PauseState(this);
        this.#runningState = new RunningState(this);
        this.#gameOverState = new GameOverState(this);
        this.#currentState = this.#startMenuState;

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
            }else if(key === "p" || key === "P") {
                this.togglePause();
            }else if(key === " " || key === "spacebar") {
                this.start();
            }else if(key === "Escape") {
                this.returnToMenu();
            }
        })
    }

    #initActors() {
        this.#actors = Object.freeze({
                food: new Food(this.#gameLayer, this.#blockSize),
                snake: new Snake(this.#gameLayer, this.#blockSize),
                score: new Score(this.#gameLayer)
            }
        )
    }

    draw() {
        this.#gameLayer.clear();
        this.#currentState.draw();
    }

    update() {
        this.#currentState.update();
    }

    get actors() {
        return this.#actors;
    }

    get gameLayer() {
        return this.#gameLayer;
    }

    get runningState() {
        return this.#runningState;
    }

    get gameOverState() {
        return this.#gameOverState;
    }

    get pauseState() {
        return this.#pauseState;
    }

    togglePause() {
        this.#currentState.togglePause();
    }

    setState(state) {
        this.#currentState = state;
    }

    start() {
        this.#initActors();
        this.setState(this.#runningState);
    }

    returnToMenu() {
        this.setState(this.#startMenuState);
    }
}