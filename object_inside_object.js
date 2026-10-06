const r = require("raylib");

const circelCenter = {
    x: 900,
    y: 120,
};

const randomColour = {
    r: 50,
    g: 100,
    b: 220,
    a: 255,
};
function setup() {
    r.InitWindow(1000, 900, "Colours");
    r.SetTargetFPS(60);
}

function update() {
    circelCenter.x >= 1000
        ? (circelCenter.x = 50) && (circelCenter.y += 50)
        : (circelCenter.x += 6);
    circelCenter.y >= 900 && (circelCenter.y = 50);

    randomColour.r == 255 ? (randomColour.r = 0) : (randomColour.r += 1);
    randomColour.b == 255 ? (randomColour.b = 0) : (randomColour.b += 1);
    randomColour.g == 255 ? (randomColour.g = 0) : (randomColour.g += 1);
}

function getRactCenter(position, size) {
    return {
        x: position.x + size.x / 2,
        y: position.y + size.y / 2,
    };
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const glass = {
        r: 255,
        g: 50,
        b: 50,
        a: 120,
    };

    const button = {
        position: {
            x: 100,
            y: 50,
        },
        size: {
            x: 200,
            y: 100,
        },
    };

    const windowRect = {
        x: 500,
        y: 400,
        width: 400,
        height: 200,
    };

    const spaceship = {
        position: {
            x: 100,
            y: 850,
        },

        size: {
            x: 60,
            y: 30,
        },

        color: r.WHITE,
    };

    const buttonCenter = getRactCenter(button.position, button.size);
    const roundRacCenter = getRactCenter(
        { x: windowRect.x, y: windowRect.y },
        { x: windowRect.width, y: windowRect.height },
    );

    r.DrawRectangleV(button.position, button.size, r.BLUE);
    r.DrawRectangleV(spaceship.position, spaceship.size, spaceship.color);
    r.DrawRectangleRounded(windowRect, 0.9, 10, r.GREEN);
    r.DrawRectangleRoundedLines(windowRect, 0.9, 10, 2, r.YELLOW);
    r.DrawRectangleGradientH(
        100,
        windowRect.y,
        200,
        windowRect.height,
        randomColour,
        r.GREEN,
    );
    r.DrawRectangleGradientV(
        200,
        windowRect.y + 100,
        200,
        windowRect.height,
        randomColour,
        r.GREEN,
    );
    r.DrawCircleV(circelCenter, 50, glass);
    r.DrawCircleLines(circelCenter.x, circelCenter.y, 50, r.YELLOW);
    r.DrawCircleSector({ x: 400, y: 350 }, 40, 0, 180, 10, r.ORANGE);
    r.DrawCircleSectorLines({ x: 400, y: 350 }, 40, 0, 180, 50, r.WHITE);
    r.DrawCircleSector({ x: 400, y: 800 }, 40, 90, 205, 50, r.WHITE);
    r.DrawLineEx(buttonCenter, circelCenter, 3, r.WHITE);
    r.DrawLineEx(roundRacCenter, circelCenter, 3, r.WHITE);
    r.DrawLineEx(roundRacCenter, buttonCenter, 3, r.WHITE);

    // r.DrawRectangle(
    //     button.position.x,
    //     button.position.y,
    //     button.size.width,
    //     button.size.height,
    //     randomColour,
    // );

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
