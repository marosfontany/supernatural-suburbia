
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



