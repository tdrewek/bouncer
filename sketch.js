var ball_x = 250;
var ball_y = 250;

var ball_dx = 0;
var ball_dy = 0;

function setup() {
    createCanvas(500, 500);
}

function ball() {
    circle(ball_x, ball_y, 50);
}
  
function draw() {
    background(200);
    ball();
    ball_x = ball_x + ball_dx;
    ball_y = ball_y + ball_dy;
    if (ball_x >= 500) {
        ball_dx = - ball_dx;
    }
    if (ball_x <= 0){
        ball_dx = + ball_dx;
    }
    if (ball_y >= 500){
        ball_dy = - ball_dy;
    }
    if (ball_y <= 0){
        ball_dy = + ball_dy;
    }
    ball_dy = ball_dy + .67;

}

function mousePressed() {
    ball_x = mouseX;
    ball_y = mouseY;
    ball_dx = 0;
    ball_dy = 0;
}

