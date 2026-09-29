import { randomPosition } from "./utils.js";


export function createFood(snake, rows, columns) {

    let food;

    do {

        food = randomPosition(
            rows,
            columns
        );

    } while (
        snake.some(
            segment =>
                segment.x === food.x &&
                segment.y === food.y
        )
    );

    return food;

}