var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var last_position_of_y, last_position_of_x;
var mouseevent = "empty";

var s_width = screen.width;

var new_width = screen.width - 75;
var new_height = screen.height - 500;

if(s_width<992) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

var color = "red";
var width = 3;

// Code for mouseup and mouseleave.
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseevent = "mouseUp";
}
canvas.addEventListener("mousedown", my_mouseleave);
function my_mouseleave(e) {
    mouseevent = "mouseLeave";
}
//

// code for mousedown and mousemove.
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouseevent = "mouseDown";
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    last_position_of_x = e.clientX - canvas.offsetLeft;
    last_position_of_y = e.clientY - canvas.offsetTop;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_x = e.clientX - canvas.offsetLeft;
    var current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of x and y coordinates");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x and y coordinates");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
//

// Code for touch.
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    var current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last position of x and y coordinates");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        
        last_position_of_x = current_position_of_x;
        last_position_of_y = current_position_of_y;
}
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}


