import { Game } from './game.js';

import { setupInput } from './input.js';


const board =
    document.getElementById('game-board');

const gameOverElement =
    document.getElementById("game-over");

const restartButton =
    document.getElementById("restart");


let game;

let interval;


// Create board
const createBoard = () => {

    board.innerHTML = "";


    for (
        let y = 0;
        y < game.rows;
        y++
    ) {

        for (
            let x = 0;
            x < game.columns;
            x++
        ) {

            const cell =
                document.createElement('div');


            cell.classList.add(
                'cell'
            );


            cell.dataset.x = x;

            cell.dataset.y = y;


            board.appendChild(
                cell
            );

        }

    }

};


// Render game
const Render = () => {

    const cells = board.children;


    // Clear
    for (const cell of cells) {

        cell.classList.remove(
            "snake",
            "head",
            "food"
        );

    }


    // Snake
    game.snake
        .getBody()
        .forEach(
            (segment, index) => {

                const cell =
                    board.querySelector(
                        `[data-x="${segment.x}"][data-y="${segment.y}"]`
                    );


                if (!cell) return;


                cell.classList.add(
                    "snake"
                );


                if (index === 0) {

                    cell.classList.add(
                        "head"
                    );

                }

            }
        );


    // Food
    const foodCell =
        board.querySelector(
            `[data-x="${game.food.x}"][data-y="${game.food.y}"]`
        );


    if (foodCell) {

        foodCell.classList.add(
            "food"
        );

    }


    // Game Over
    if (!game.running) {

        gameOverElement.classList.remove(
            "hidden"
        );

    }

};


// Start game
const startGame = () => {

    clearInterval(interval);


    // Hide game over
    gameOverElement.classList.add(
        "hidden"
    );


    // Instance of Game
    game = new Game();


    // Create board
    createBoard();


    // Render snake
    Render();


    // Move game
    interval = setInterval(

        () => {

            game.update();

            Render();


            if (!game.running) {

                clearInterval(
                    interval
                );

            }

        },

        game.speed

    );


    // Input
    setupInput(
        direction => {

            game.setDirection(
                direction
            );

        }
    );

};


// Restart button
restartButton.addEventListener(
    "click",
    () => {

        startGame();

    }
);


startGame();