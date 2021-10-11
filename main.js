noseX = 0;
noseY = 0;
leftWristX = 0;
leftWristY = 0;

function preload()
{
    face_accesories = loadImage("https://i.postimg.cc/DZ3yZBQS/face-accesories.png");
    wand = loadImage("https://i.postimg.cc/zBqZ6MSF/wand.png");
}

function setup()
{
    canvas = createCanvas(300, 300, 1000, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(wand, leftWristX - 75, leftWristY - 120, 150, 150);
    image(face_accesories, noseX - 50, noseY - 100, 95, 95);
}

function take_snapshot()
{
    save("myFilterImage.png");
}

function modelLoaded()
{
    console.log("PoseNet has been successfully initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("The X coordinate of the nose is: " + noseX);
        console.log("The Y coordinate of the nose is: " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("The X coordinate of the left wrist is: " + leftWristX);
        console.log("The Y coordinate of the left wrist is: " + leftWristY);
    }
}