status = "";
results = [];

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
    results = results;

}

function draw(){
    image(img, 0, 0, 640, 420);
    
    if(status != ""){
        for(i = 0; i < object.length ; i++){
            document.getElementById("status").innerHTML = "Status : Detecting Object";
             
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(object[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
