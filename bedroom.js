status = "";

function preload(){
    img = loadImage("Bedroom.jpg");
}

function setup(){
    canvas = createCanvas(500,600);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results){
    if (error){
        console.log(error);
    }

    console.log(results);
}
