var audio = document.getElementById('audio');
var btnPlay = document.getElementById('play');
var btnPause = document.getElementById('pause');
var reproducir = document.getElementById('reproducir');
var btnParar = document.getElementById('parar');
var btnRestart = document.getElementById('restart');
var btnVolumeDown = document.getElementById('volumeDown');
var btnVolumeUp = document.getElementById('volumeUp');
var bntSilence = document.getElementById('silenciar');
var isPaused = false;
//var pause = document.getElementById("pause");
var tiempo = document.getElementById("tiempo");
var timeRange = document.getElementById('time-range');
var tiempoActual = document.getElementById('tiempoActual');
var tiempoDuracion = document.getElementById('tiempoDuracion');



function play() {
    if (!isPaused) {
        audio.play();
        btnPlay.classList.remove("fa-play");
        btnPause.classList.add("fa-pause");
        cambiarIconPP();
    } else {
        audio.pause();
        btnPause.classList.remove("fa-pause");
        btnPlay.classList.add("fa-play");
        cambiarIconPP();
    }
    isPaused = !isPaused;
};
//Funcion que cambia los iconos entre pause y play
function cambiarIconPP() {
    if (audio.paused) {
        btnPlay.style.display = "inline-block";
        btnPause.style.display = "none";
    } else {
        btnPlay.style.display = "none";
        btnPause.style.display = "inline-block";
    }
}
//Funcion para detener el audio
function parar() {
    audio.pause();
    audio.currentTime = 0;
    btnPause.classList.remove("fa-pause");
    btnPlay.classList.add("fa-play");
    isPaused = false;
    cambiarIconPP();
};

function restart() {
    audio.currentTime = 0;
    timeRange.value = 0;
    audio.play();
    btnPlay.classList.remove("fa-play");
    btnPause.classList.add("fa-pause");
    isPaused = true;
    cambiarIconPP();
};
function volume() {
    audio.volume = volumeRange.value / 100;
}
function volumeDown() {
    if (audio.volume > 0.1) {
      audio.volume -= 0.1;
      volumeRange.value = audio.volume * 100;
    }
  }
function volumeUp() {
    if (audio.volume < 1) {
      audio.volume += 0.1;
      volumeRange.value = audio.volume * 100;
    }
}
  
function silenciar() {
    audio.muted = !audio.muted;
}

var progress = document.getElementById('progreso');
progress.addEventListener('click', adelantar);
audio.addEventListener("timeupdate", updateProgress, true);

//Esta funcion sirve para que al hacer click sobre la barra de progreso el audio avance o retroceda
function adelantar(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
    audio.currentTime = scrubTime;
}
//Funcion para convertir segundos a minutos y horas
function secondsToString(seconds) {
    seconds = Math.floor(seconds);
    var hour="";
    if (seconds>3600){
        hour = Math.floor(seconds / 3600);
        hour = (hour < 10)? '0' + hour : hour;
        hour+=":"
    }
   var minute = Math.floor((seconds / 60) % 60);
  minute = (minute < 10)? '0' + minute : minute;
  var second = seconds % 60;
  second = (second < 10)? '0' + second : second;
  return hour  + minute + ':' + second;
}
function updateProgress() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    //Actualiza la barra de progreso
    const progressPercentage = (currentTime / duration) * 100;
    timeRange.value = progressPercentage;

    //Actualiza los tiempos de la interfaz
    tiempoActual.textContent = secondsToString(currentTime);
    tiempoDuracion.textContent = secondsToString(duration);
}

