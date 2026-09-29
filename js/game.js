import { Snake } from "./snake.js";

import {
    bodyCollision,
    foodCollision
} from "./collision.js";

import { createFood } from "./food.js";


export class Game {

    constructor() {

        this.rows = 20;

        this.columns = 20;

        this.score = 0;

        this.speed = 150;

        this.direction = "RIGHT";

        this.nextDirection = "RIGHT";

        this.running = true;


        // Create snake

        this.snake = new Snake();


        // Create food

        this.food = createFood(
            this.snake.getBody(),
            this.rows,
            this.columns
        );

    }


    // Set direction

    setDirection(direction) {

        const opposite = {

            UP: "DOWN",

            DOWN: "UP",

            LEFT: "RIGHT",

            RIGHT: "LEFT"

        };


        if (
            opposite[this.direction] === direction
        ) {

            return;

        }


        this.nextDirection = direction;

    }


    // Update game

    update() {

        if (!this.running) {

            return;

        }


        this.direction =
            this.nextDirection;


        const movement = {

            UP: {
                x: 0,
                y: -1
            },

            DOWN: {
                x: 0,
                y: 1
            },

            LEFT: {
                x: -1,
                y: 0
            },

            RIGHT: {
                x: 1,
                y: 0
            }

        };


        // Current head

        const head =
            this.snake.getHead();


        // New head position

        let newHead = {

            x:
                head.x +
                movement[this.direction].x,

            y:
                head.y +
                movement[this.direction].y

        };


        // Wall wrap

        if (newHead.x >= this.columns) {

            newHead.x = 0;

        }

        if (newHead.x < 0) {

            newHead.x = this.columns - 1;

        }

        if (newHead.y >= this.rows) {

            newHead.y = 0;

        }

        if (newHead.y < 0) {

            newHead.y = this.rows - 1;

        }


        // Body collision

        if (
            bodyCollision(
                newHead,
                this.snake.getBody()
            )
        ) {

            this.endGame();

            return;

        }


        // Move snake

        this.snake.move(newHead);


        // Food collision

        if (
            foodCollision(
                newHead,
                this.food
            )
        ) {

            this.score++;


            this.food = createFood(
                this.snake.getBody(),
                this.rows,
                this.columns
            );

        }

        else {

            this.snake.removeTail();

        }

    }


    // End game

    endGame() {

        this.running = false;

    }

}