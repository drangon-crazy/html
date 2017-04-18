var tempContext = null; // global variable 2d context  
var started = false;  
var mText_canvas = null;  
var x = 0, y =0;  
  
window.onload = function() {  
    var canvas = document.getElementById("CANVAS");  
      
    // get 2D context of canvas and draw rectangel  
    tempContext = canvas.getContext("2d");  
    tempContext.fillStyle="blue";  
    x = canvas.width/2;  
    y = canvas.height/2;  
    tempContext.fillRect(x, y, 80, 40);  
  
       // key event - use DOM element as object  
       
       // key event - use window as object  
       window.addEventListener('keydown', doKeyDown, true);  
         
       // mouse event  
       
}  
  
function getPointOnCanvas(canvas, x, y) {  
    var bbox = canvas.getBoundingClientRect();  
    return { x: x - bbox.left * (canvas.width  / bbox.width),  
            y: y - bbox.top  * (canvas.height / bbox.height)  
            };  
}  
  
function doKeyDown(e) {  
    var keyID = e.keyCode ? e.keyCode :e.which;  
    if(keyID === 38 || keyID === 87)  { // up arrow and W  
        clearCanvas();  
        y = y - 10;  
        tempContext.fillRect(x, y, 80, 40);  
      
    }  
    if(keyID === 39 || keyID === 68)  { // right arrow and D  
        clearCanvas();  
        x = x + 10;  
        tempContext.fillRect(x, y, 80, 40);  
       
    }  
    if(keyID === 40 || keyID === 83)  { // down arrow and S  
        clearCanvas();  
        y = y + 10;  
        tempContext.fillRect(x, y, 80, 40);  
       
    }  
    if(keyID === 37 || keyID === 65)  { // left arrow and A  
        clearCanvas();  
        x = x - 10;  
        tempContext.fillRect(x, y, 80, 40);  
     
    }  
}  
  
function clearCanvas() {  
    tempContext.clearRect(0, 0, 500, 500)  
}  
  
function doMouseDown(event) {  
    var x = event.pageX;  
    var y = event.pageY;  
    var canvas = event.target;  
    var loc = getPointOnCanvas(canvas, x, y);  
    console.log("mouse down at point( x:" + loc.x + ", y:" + loc.y + ")");  
    tempContext.beginPath();  
    tempContext.moveTo(loc.x, loc.y);  
    started = true;  
}  
  
function doMouseMove(event) {  
    var x = event.pageX;  
    var y = event.pageY;  
    var canvas = event.target;  
    var loc = getPointOnCanvas(canvas, x, y);  
    if (started) {  
        tempContext.lineTo(loc.x, loc.y);  
        tempContext.stroke();  
    }  
}  
  
function doMouseUp(event) {  
    console.log("mouse up now");  
    if (started) {  
        doMouseMove(event);  
        started = false;  
    }  
}  
  
