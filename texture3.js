const r = require("raylib");

function setup() {
    const screen = {
        width: 1200,
        height: 800,
        title: "Texture",
        fps: 10,
    };

    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);
    r.SetTraceLogLevel(r.LOG_NONE);

    const txt = {
        x: 0,
        y: 0,
    };

    const target = r.LoadRenderTexture(300, 200);

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            r.DrawCircle(50 + i * 105, 50 + j * 55, 30, r.WHITE);
        }
    }

    r.EndTextureMode();

    return { screen, txt, target };
}

function toRadian(angle) {
    return angle * (Math.PI / 180);
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.GRAY);

    r.DrawTexture(world.target.texture, 0, 0, r.WHITE);
    r.DrawTexture(world.target.texture, 500, 500, r.WHITE);

    r.EndDrawing();
}

function update(world) {}

function teardown() {
    r.CloseWindow();
}

function loop(world) {
    while (!r.WindowShouldClose()) {
        draw(world);
        update(world);
    }
    teardown();
}

function main() {
    const world = setup();
    loop(world);
}

main();
