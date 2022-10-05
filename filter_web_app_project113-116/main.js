function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {

}

function modelLoaded() {
    console.log('Posenet is initialised')

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        console.log("Nose X = ", noseX)
        console.log("Nose Y = ", noseY)
    }
}

function take_snapshot() {
    save('MyFilterImage.png');
}