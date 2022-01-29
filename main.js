nose_x=0;
nose_y=0;
difference=0;
leftWristX=0;
rightWristX=0;


function setup(){
    video = createCapture(VIDEO)
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.positio(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('poses', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=leftWristX-rightWristX;
    }

}

function draw(){
    background("#40e0d0");
    textSize(difference)
    fill('#ff0000');
    text('Mayank', nose_x,nose_y);
}
