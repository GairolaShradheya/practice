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

    return { screen, txt };
}

function toRadian(angle) {
    return angle * (Math.PI / 180);
}

function draw(world) {
    const target = r.LoadRenderTexture(300, 200);

    r.BeginTextureMode(target);

    r.DrawCircle(10, 100, 10, r.WHITE);

    r.EndTextureMode();

    r.BeginDrawing();
    // r.ClearBackground(r.BLACK);

    r.DrawTexture(
        target.texture,
        world.txt.x,
        300 + 100 * Math.sin(toRadian(world.txt.y)),
        r.WHITE,
    );

    r.EndDrawing();
}

function update(world) {
    world.txt.x += 30;
    world.txt.y += 30;
}

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
