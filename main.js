noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!')
    poseNet.on('pose', gotPoses);
}



function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseX = " +noseX+ ",noseY = " +noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        difference = floor(rightWristX - leftWristX);
        console.log("leftWristX = " +leftWristX+ ",rightWristX = " +rightWristX+ ",difference = " +difference);
    }
}
function draw() {
    background('#969A97');
    textSize(difference);
    fill('#33CCFF');
    text('Hritesh', noseX, noseY);

}