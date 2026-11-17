const r = require("raylib");

function setup() {
    const screen = {
        width: 1000,
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

    const target = r.LoadRenderTexture(300, 200);

    r.BeginTextureMode(target);
    r.ClearBackground(r.BLACK);

    r.DrawCircle(150, 100, 60, r.RED);
    r.DrawCircle(130, 80, 15, r.WHITE);

    r.EndTextureMode();

    return { screen, circle, target };
}

function draw(world) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);

    const rectangle = {
        x: 100,
        y: 50,
        width: 100,
        height: 100,
    };
    const hFlipRec = {
        x: 0,
        y: 0,
        width: -300,
        height: 200,
    };
    const vFlipRec = {
        x: 0,
        y: 0,
        width: 300,
        height: -200,
    };

    r.DrawTexture(world.target.texture, 50, 50, r.WHITE);
    r.DrawTexture(world.target.texture, 300, 50, r.WHITE);
    r.DrawTexture(world.target.texture, 550, 50, r.WHITE);
    r.DrawTextureRec(
        world.target.texture,
        rectangle,
        { x: 300, y: 300 },
        r.WHITE,
    );
    r.DrawTextureRec(
        world.target.texture,
        hFlipRec,
        { x: 500, y: 300 },
        r.WHITE,
    );
    r.DrawTextureRec(world.target.texture, vFlipRec, { x: 0, y: 500 }, r.WHITE);

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
