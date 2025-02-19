
var video = document.getElementById("videoPlayer");
function playPause() { 
    if (video.paused) 
        video.play(); 
    else 
        video.pause(); 
}
function recargar() { 
   video.load(); 
}
function maximizar() { 
    video.width = 1000; 
}
function minimizar() { 
    video.width = 250; 
} 
function normal() { 
    video.width = 500; 
} 
