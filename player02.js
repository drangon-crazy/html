  var tempContext = null; // global variable 2d context  
var started = false;  
var mText_canvas = null;  
var x = 0, y =0;  
  
function init() 
{ 
   canvas = document.getElementById("CANVAS2");  
   cxt = canvas.getContext("2d"); 
   
    action_sprite = new Image(); 
	action_sprite.src = "pics/action04.png"; 
    action_sprite.onload = function(){
	  actionFrame = 0;
	  setInterval(animate, 150);  
   }

}

function animate(){
   cxt.clearRect(0,0,this.canvas.width,this.canvas.height);

	if(actionFrame > 5)
	{
		actionFrame = 0;
	}
	
	var nextFrameX = actionFrame * 125; 
	x = canvas.width/2;  
    y = canvas.height/2; 
    
   
    cxt.drawImage(action_sprite,nextFrameX,0,125,85,x,y,125,85);

	actionFrame ++;  
} 

window.addEventListener("load",init,true);
// function doKeyDown(e) {  
//     var keyID = e.keyCode ? e.keyCode :e.which;  
//     if(keyID === 38 || keyID === 87)  { // up arrow and W  
//         clearCanvas();  
//         y = y - 10;  
//         cxt.drawImage(action_sprite,nextFrameX,0,125,85,x,y,125,85);  
      
//     }  
//     if(keyID === 39 || keyID === 68)  { // right arrow and D  
//         clearCanvas();  
//         x = x + 10;  
//         cxt.drawImage(action_sprite,nextFrameX,0,125,85,x,y,125,85);  
       
//     }  
//     if(keyID === 40 || keyID === 83)  { // down arrow and S  
//         clearCanvas();  
//         y = y + 10;  
//         cxt.drawImage(action_sprite,nextFrameX,0,125,85,x,y,125,85);
       
//     }  
//     if(keyID === 37 || keyID === 65)  { // left arrow and A  
//         clearCanvas();  
//         x = x - 10;  
//        cxt.drawImage(action_sprite,nextFrameX,0,125,85,x,y,125,85); 
     
//     }  
// }  
// function clearCanvas() {  
//     tempContext.clearRect(0, 0, 500, 500)  
// }  
// function getPointOnCanvas(canvas, x, y) {  
//     var bbox = canvas.getBoundingClientRect();  
//     return { x: x - bbox.left * (canvas.width  / bbox.width),  
//             y: y - bbox.top  * (canvas.height / bbox.height)  
//             };  
// }  
// function doMouseDown(event) {  
//     var x = event.pageX;  
//     var y = event.pageY;  
//     var canvas = event.target;  
//     var loc = getPointOnCanvas(canvas, x, y);  
//     console.log("mouse down at point( x:" + loc.x + ", y:" + loc.y + ")");  
//     cxt.beginPath();  
//     cxt.moveTo(loc.x, loc.y);  
//     started = true;  
// }  
  
// function doMouseMove(event) {  
//     var x = event.pageX;  
//     var y = event.pageY;  
//     var canvas = event.target;  
//     var loc = getPointOnCanvas(canvas, x, y);  
//     if (started) {  
//         cxt.lineTo(loc.x, loc.y);  
//         cxt.stroke();  
//     }  
// }  
  
// function doMouseUp(event) {  
//     console.log("mouse up now");  
//     if (started) {  
//         doMouseMove(event);  
//         started = false;  
//     }  
// }  