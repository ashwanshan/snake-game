export function setupInput(changeDirection) {

    const keyMap = {

        ArrowUp: "UP",

        ArrowDown: "DOWN",

        ArrowLeft: "LEFT",

        ArrowRight: "RIGHT",

        w: "UP",

        s: "DOWN",

        a: "LEFT",

        d: "RIGHT"

    };


    // Keyboard input
    document.addEventListener(
        "keydown",
        event => {

            const direction = keyMap[event.key];

            if (direction) {

                changeDirection(
                    direction
                );

            }

        }
    );


    // Button input
    const buttons =
        document.querySelectorAll(
            "[data-direction]"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const direction = String(button.dataset.direction || "").toUpperCase();

                if (direction) {
                    changeDirection(direction);
                }

            }
        );

    });

}