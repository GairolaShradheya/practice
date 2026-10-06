const r = require("raylib");

const colour = {
    r: 30,
    g: 45,
    b: 200,
    a: 100,
};
let ractangleX = 10;
let ractangleY = 5;

function setup() {
    r.InitWindow(1000, 900, "Colours");
    r.SetTargetFPS(60);
}

function update() {
    colour.r == 255 ? (colour.r = 0) : (colour.r += 1);
    colour.g == 255 ? (colour.g = 0) : (colour.g += 1);
    colour.b == 255 ? (colour.b = 0) : (colour.b += 1);
    ractangleX + 200 >= 1000 ? (ractangleX = 0) : (ractangleX += 5);
    ractangleY + 300 >= 900 ? (ractangleY = 0) : (ractangleY += 2);
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    const blue = {
        r: 50,
        g: 100,
        b: 220,
        a: 255,
    };

    const glass = {
        r: 255,
        g: 50,
        b: 50,
        a: 120,
    };

    const windowRect = {
        x: 50,
        y: 50,
        width: 200,
        height: 100,
    };

    r.DrawRectangle(ractangleX, ractangleY, 200, 300, colour);
    r.DrawRectangleRec(windowRect, blue);
    r.DrawRectangleLines(
        windowRect.x,
        windowRect.y,
        windowRect.width,
        windowRect.height,
        r.WHITE,
    );
    r.DrawRectangle(100, 80, 200, 100, glass);

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
