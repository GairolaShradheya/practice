const r = require("raylib");

function setup() {
    const screen = {
        width: 800,
        height: 800,
        title: "Texture",
        fps: 50,
    };

    r.InitWindow(screen.width, screen.height, screen.title);
    r.SetTargetFPS(screen.fps);
    r.SetTraceLogLevel(r.LOG_NONE);

    const circle = {
        center: {
            x: 200,
            y: 200,
        },
        radius: 100,
    };

    return { screen, circle };
}

function draw(world) {
    const target = r.LoadRenderTexture(300, 200);

    r.BeginTextureMode(target);

    r.DrawCircle(150, 100, 50, r.RED);

    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);

    r.DrawTexture(target.texture, 0, 0, r.WHITE);

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
