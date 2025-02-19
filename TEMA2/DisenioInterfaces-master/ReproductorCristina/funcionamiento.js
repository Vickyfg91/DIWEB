var play = document.getElementById("play");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var title = document.getElementById("title");
var artist = document.getElementById("artist");
var art = document.getElementById("art");
var current_track = 0;
var song, duration;
var playing = false;
var songs = [
  {
    title: "Hotel California",
    artist: "Eagles",
    url: "canciones/hotel-california.m4a",
    art: "eagles-hotel-california.jpg",
  },

  {
    title: "Flowers",
    artist: "Miley Cyrus",
    url: "canciones/flowers.m4a",
    art: "flowers.jpeg",
  },
];

var cancion = document.getElementById("cancion");

//Cargar cancion
cancion.addEventListener("timeupdate", cargarCancion, false);
cancion.addEventListener("timeupdate", lineaTiempo, false);

//Esto es para diferenciar entre pause y play
play.onclick = function () {
  playing ? cancion.pause() : cancion.play();
};
//Para cambiar icono
cancion.addEventListener(
  "pause",
  function () {
    play.innerHTML = '<img class="pad" src="play.svg" />';
    playing = false;
  },
  false
);

cancion.addEventListener(
  "playing",
  function () {
    play.innerHTML = '<img src="pause.svg" />';
    playing = true;
  },
  false
);

//Cambiamos de canción
next.addEventListener("click", siguienteCancion, false);
prev.addEventListener("click", atrasCancion, false);

//Cambiar de volumen
let volumen = document.getElementById("volumen");
volumen.addEventListener("change", cambiarVolumen, false);

//Stop
let stop = document.getElementById("stopButton");
stop.addEventListener(
  "click",
  function () {
    cancion.currentTime = 0;
    cancion.pause();
  },
  false
);

//Reset
let reset = document.getElementById("resetButton");
reset.addEventListener(
  "click",
  function () {
    cancion.currentTime = 0;
    cancion.play();
  },
  false
);

//METODOS
//Carga canción
function cargarCancion() {
  curtime = cancion.currentTime;
  percent = Math.round((curtime * 100) / duration);
}

//Linea del tiempo
function lineaTiempo(e) {
  var progreso = document.getElementById("progreso");
  let porcentaje = (e.target.currentTime / e.target.duration) * 100;
  progreso.setAttribute("value", porcentaje.toString());
}

//Siguiente cancion
function siguienteCancion() {
  current_track++;
  current_track = current_track % songs.length;
  1;
  song = songs[current_track];
  cancion.src = song.url;
  cancion.onloadeddata = function () {
    infoArtista();
  };
}

//Cancion previa
function atrasCancion() {
  current_track--;
  current_track = current_track == -1 ? songs.length - 1 : current_track;
  song = songs[current_track];
  cancion.src = song.url;
  cancion.onloadeddata = function () {
    infoArtista();
  };
}

//Carga la info del artista
function infoArtista() {
  title.textContent = song.title;
  artist.textContent = song.artist;
  art.src = song.art;
  art.onload = function () {
    cancion.play();
  };
}

function cambiarVolumen(e) {
  let volumen = e.target.value;

  cancion.volume = volumen / 100;
}
