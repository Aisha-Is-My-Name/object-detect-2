closet_image = "";
Status = "";
function setup(){
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.gettElementById("status");
}

function modelLoaded(){
    console.log("Model Loaded!!");
    Status = true;
    object_detector.Detect(closet_image, gotResults);
}

function gotResults(results, error){
if(error){
    console.error(error);
}
console.log(results);
}

function draw(){
    image(closet_image,0,0,640,350);
}