img = "";
objects = [];
modelStatus = "";

function preload(){
    img = loadImage('jsxmbo0lypccxsnuhuak9tgue6nxinzqtqil_640x640.jpeg');
}



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded() {
    console.log("modelo Carregado!")
    modelStatus = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);

}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("garrafas", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 50, 597, 587);
}