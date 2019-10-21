document.getElementById('level').innerHTML ="<h1>level 0</h1>";
$.getJSON("levels.json", function(json) {
var a=[];
var counter=0;
var lev=0;
$.each(json,function(key,value){
    a.push(value);
});
document.addEventListener("mousemove", getMousePosition);
function getMousePosition(mp) {
var _x;
var _y;
_x = mp.pageX - $('#square').offset().left;
_y = mp.pageY- $('#square').offset().top;
var dist = Math.abs(a[0][counter][0] - _x) + Math.abs(a[0][counter][1] - _y);
if(dist<10){
    if(lev<a[0].length){
        lev++;
        document.getElementById('level').innerHTML ="<h1>level "+lev+"</h1>";
        counter++;
    }
    if(lev==a[0].length){
        document.getElementById('level').innerHTML ="<h1>You won!</h1>";
        document.getElementById("square").style.backgroundColor = "blue";
        document.removeEventListener("mousemove", getMousePosition);
        document.getElementById("square").style.backgroundColor = "blue";
    }

}
var hex = 255 - (dist/2);
// console.log(_x,_y,hex);
if(_x<256 && _x>0 && _y>0&& _y<256)
$('#square').css('background-color','rgb('+hex+','+hex+','+hex+')');
return true;
}
});
document.getElementById("square").style.backgroundColor = "blue";
