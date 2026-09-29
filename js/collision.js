export function wallCollision(head, rows, columns) {

    return (
        head.x < 0 ||
        head.x >= columns ||
        head.y < 0 ||
        head.y >= rows
    );

}


export function bodyCollision(head, snake) {

    return snake.some(
        segment =>
            segment.x === head.x &&
            segment.y === head.y
    );

}


export function foodCollision(head, food) {

    return (
        head.x === food.x &&
        head.y === food.y
    );

}