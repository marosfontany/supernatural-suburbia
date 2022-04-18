
var vid = document.getElementById("backgroundvideo");
vid.playbackRate = 0.5;



/* Java Script taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_read_more (viewed 06/04/2022) */

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "view all lyrics"; 
      moreText.style.display = "none";
    } 
    
    else {
      dots.style.display = "none";
      btnText.innerHTML = "close"; 
      moreText.style.display = "inline";
    }
  }


/* custom cursor taken from https://www.youtube.com/watch?v=TpwpAYi-p2w (viewed 15/04/2022) */

let mouseCursor = document.querySelector(".cursor");
let title = document.querySelector("heading");


window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

var loader = document.getElementById("preloader");
var content = document.querySelector(".content");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    content.style.display = "block";
    setTimeout(() => (content.style.opacity = 1), 50);
  }, 4000);
}


/* dkkd

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})
*/

