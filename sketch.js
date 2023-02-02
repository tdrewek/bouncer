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
    if (ball_x >= 475) {
        ball_dx = - ball_dx;
    }
    if (ball_x <=25){
        ball_dx = + ball_dx;
    }
    if (ball_y >= 475){
        ball_dy = - ball_dy;
    }
    if (ball_y > 475){
        ball_y = 475;
    }
    if (ball_y <= 25){
        ball_dy = + ball_dy;
    }
    if (ball_y < 25){
        ball_y = 25;
    }
    ball_dy = ball_dy + .67;

}

function mousePressed() {
    ball_x = mouseX;
    ball_y = mouseY;
    ball_dx = 0;
    ball_dy = 0;
}

