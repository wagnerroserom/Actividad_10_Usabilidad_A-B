//PRUEBA A/B -LÓGICA DEL BOTÓN "SEGUIR"
//Se seleccionará aleatoriamente entre la versión A y B

//1: Con math.random() se generará un número entre 0 y 1. si es menor que 0.5 mostrará la versión A sino, la B
const version = Math.random() < 0.5 ? 'A' : 'B';

//2: Se obtiene el botón "Seguir del DOM (HTML)"
const followBtn = document.getElementById('follow-btn');

//3: Inicio del temporizador
let starTime = Date.now();

//4: Mostramos el tiempo en pantalla
const timerDisplay = document.getElementById('timer');

//5: Se configura el botón según la versión seleccionada
if (version === 'A') {
    //La versión A es el diseño circular con el símbolo "+"
    followBtn.textContent = '+';
    followBtn.classList.add('btn-a');
} else {
    //La versión B es el diseño rectangular con texto: "SESGUIR ARTISTA"
    followBtn.textContent = 'SEGUIR ARTISTA';
    followBtn.classList.add('btn-b');
}
