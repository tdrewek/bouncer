ball_x = 200
ball_y = 200

ball_dx = 0
ball_dy = 0

function setup() {
    createCanvas(400, 400);
}

function ball() {
    circle(ball_x, ball_y, 30)
}
  
function draw() {
    background(200);
    ball();
    ball_x = ball_x + ball_dx;
    ball_y = ball_y + ball_dy;
    if ((ball_x <= 0) || (ball_x >= 400)) {
        ball_dx = - ball_dx;
    }
    if (ball_y <= 10) {
        ball_dy = - ball_dy;
    }
    if (ball_y >= 400){
        ball_y = 400;
    }
    if (ball_y < 10) {
        ball_y = 10;
    }
    ball_dy = ball_dy + .67
}

function mousePressed() {
    ball_x = mouseX
    ball_y = mouseY
    ball_dx = 0
    ball_dy = 0
}

