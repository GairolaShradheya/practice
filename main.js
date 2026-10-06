// const sketch = require("./practice");
const sketch = require("./object_inside_object");
// const sketch = require("./colour_sketch");

function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}

function main() {
    sketch.setup();
    loop();
    sketch.tearDown();
}

main();
