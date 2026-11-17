const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const screen = {
        width: 800,
        height: 200,
        title: "Dino",
        fps: 60,
    };
    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);
    const player = {
        x: 0,
        y: 100,
        step: 4,
    };
    return { screen, player };
}

function update(world) {
    if (r.IsKeyDown(r.KEY_LEFT_SHIFT)) {
        world.player.step = 80;
    }

    if (r.IsKeyPressed(r.KEY_RIGHT)) {
        world.player.x += world.player.step;
    }
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawRectangle(world.player.x, world.player.y, 64, 80, r.RED);

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (running()) {
        update(world);
        draw(world);
    }
}

function main() {
    loop(setup());
    teardown();
}

main();
