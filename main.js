nosex = 0;
nosey = 0;

function preload(){
clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
canvas = createCanvas(500 , 500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on("pose" , gotPoses);
}

function modelLoaded() {
    console.log("Posenet is Loaded!");
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        console.log("nose x = "+results[0].pose.nose.x);
        console.log("nose y = "+results[0].pose.nose.y);
        nosex = results[0].pose.nose.x -75;
        nosey = results[0].pose.nose.y;
    }
}
function take_snapshot() {
save("Clown_Nose_Filter.png")
}

function draw(){
    image(video , 0 , 0 , 500 , 500);
    image(clownNose , nosex , nosey , 30 , 30);
    }