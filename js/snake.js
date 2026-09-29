export class Snake {

    constructor() {

        this.body = [

            { x: 10, y: 10 },

            { x: 9, y: 10 },

            { x: 8, y: 10 }

        ];

    }


    // Get head

    getHead() {

        return this.body[0];

    }


    // Move snake

    move(newHead) {

        this.body.unshift(newHead);

    }


    // Remove tail

    removeTail() {

        this.body.pop();

    }


    // Grow snake

    grow(newHead) {

        this.body.unshift(newHead);

    }


    // Get body

    getBody() {

        return this.body;

    }

}