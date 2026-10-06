const r = require("raylib");

function setup() {
    r.InitWindow(1000, 900, "Colours");
    r.SetTargetFPS(60);
}

function update() {}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const window = {
        position: {
            x: 200,
            y: 300,
        },
        size: {
            x: 300,
            y: 200,
        },
        colour: {
            r: 255,
            g: 100,
            b: 0,
            a: 150,
        },
    };

    const button = {
        position: {
            x: 600,
            y: 300,
        },
        size: {
            x: 300,
            y: 300,
        },
        colour: {
            r: 25,
            g: 100,
            b: 0,
            a: 190,
        },
        roundness: 1,
    };

    const car = {
        position: {
            x: 800,
            y: 100,
        },
        size: {
            x: 100,
            y: 50,
        },
        colour: {
            r: 205,
            g: 10,
            b: 0,
            a: 250,
        },
    };

    const ball = {
        position: {
            x: 400,
            y: 600,
        },
        colour: {
            r: 155,
            g: 190,
            b: 0,
            a: 240,
        },
    };

    const leftPoint = {
        x: 500,
        y: 100,
    };

    const rightPoint = {
        x: 250,
        y: 800,
    };

    const targetPoint = {
        x: 500,
        y: 700,
    };

    r.DrawRectangleRec(
        {
            x: window.position.x,
            y: window.position.y,
            width: window.size.x,
            height: window.size.y,
        },
        window.colour,
    );
    r.DrawRectangleLines(
        window.position.x,
        window.position.y,
        window.size.x,
        window.size.y,
        r.WHITE,
    );

    r.DrawRectangleRounded(
        {
            x: button.position.x,
            y: button.position.y,
            width: button.size.x,
            height: button.size.y,
        },
        button.roundness,
        10,
        button.colour,
    );
    r.DrawRectangleRoundedLines(
        {
            x: button.position.x,
            y: button.position.y,
            width: button.size.x,
            height: button.size.y,
        },
        button.roundness,
        10,
        3,
        r.WHITE,
    );

    r.DrawCircleV(leftPoint, 40, r.GREEN);
    r.DrawCircleV(rightPoint, 40, r.GREEN);
    r.DrawLineV(leftPoint, rightPoint, r.WHITE);

    r.DrawCircleV(targetPoint, 80, r.WHITE);
    r.DrawCircleV(targetPoint, 60, r.YELLOW);
    r.DrawCircleV(targetPoint, 40, { r: 0, g: 228, b: 48, a: 70 });

    r.DrawRectangleV(car.position, car.size, car.colour);
    r.DrawCircleV(ball.position, 40, ball.colour);

    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    setup,
    update,
    draw,
    running,
    tearDown,
};
