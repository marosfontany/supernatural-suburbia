
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

setTimeout(() => {
  var loader = document.getElementById("preloader");

  loader.style.visibility = "hidden";
}, 2000);
