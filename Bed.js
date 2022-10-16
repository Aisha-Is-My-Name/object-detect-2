Status = "";
Bed_image = "";

function preload(){
    Bed_image = loadImage("fan image.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status");
}

function modelLoaded(){
    console.log("Model Loaded!!");
    Status = true;
    object_detector.Detect(Bed_image, gotResults);
}

function gotResults(results, error){
if(error){
    console.error(error);
}
console.log(results);
}

function draw(){
    image(Bed_image,0,0,640,350);
}