var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var radius = document.getElementById("bsize").value;
var x = "#000000";
var dragging = false;

context.lineWidth = radius*2;
var putPoint = function (e) {
	if(dragging){
		context.lineTo(e.clientX,e.clientY);
		context.fillStyle = x;
		context.stroke();
		context.strokeStyle = x;
		context.beginPath();
		context.arc(e.clientX,e.clientY,radius,0,Math.PI+2);
		context.fill();
		context.fillStyle = x;
		context.beginPath();
		context.moveTo(e.clientX,e.clientY);
	}
}
var engaged = function(e){
    dragging = true;
    putPoint(e);
}
var release = function(){
	dragging = false;
	context.beginPath();
}
canvas.addEventListener('mousedown',engaged);
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mouseup',release);
var setRadius = function(newRadius){
	radius=newRadius;
	context.lineWidth=radius*2;
}
function color(obj) {
    switch (obj.id) {
        case "green":
            x = "green";
            break;
        case "red":
            x = "red";
            break;
        case "blue":
            x = "blue";
            break;
        case "yellow":
            x = "yellow";
            break;
        case "brown":
            x = "brown";
            break;
        case "black":
            x = "black";
            break;
        case "magenta":
            x = "magenta";
            break;
        case "cyan":
        	x = "cyan";
        	break;
        case "white":
        	x = "white";
        	break;
        case "chocolate":
        	x = "chocolate";
        	break;
        case "darkGray":
        	x = "darkGray";
        	break;
        case "deepPink":
        	x = "deepPink";
        	break;
        case "lawnGreen":
        	x = "lawnGreen";
        	break;
        case "navy":
        	x = "navy";
        	break;
        case "tomato":
        	x = "tomato";
        	break;
        case "gold":
        	x = "gold";
        	break;
        default:
        	x="black";
        break;
    }
    if(x == "white"){
    	radius = 20;
    	canvas.style.cursor="move";
    }else{
    	radius = document.getElementById("bsize").value;
    	canvas.style.cursor="default";
    }
    context.strokeStyle = x;
}
function clearAll(){
    var clearComfirm = confirm("Want to clear?");
    if (clearComfirm) {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
}
function erase(){
	context.fillStyle = "white";
	context.stroke();
	context.strokeStyle = "white";
}
function resizeCanvas(){
    var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
	//Resize the canvas size
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
    document.getElementById('myCanvas').getContext("2d").putImageData(imgData,0,0);
    //reset the radius
    setRadius(document.getElementById("bsize").value);
}
function toggleClass(e){
	//Unset all active class
	var active = document.getElementsByClassName("active");
	var i;
	for(i=0;i<=active.length;i++){
		active[i].className = "color";
	}
	// Add active class	
	document.getElementById(e.id).className = "color active";
}
function save() {
	//Save drawing
    var dataURL = canvas.toDataURL();
    window.open(dataURL,'_blank','location=0,menubar=0');
}