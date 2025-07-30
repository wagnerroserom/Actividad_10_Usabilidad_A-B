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

//6: Se actualiza el temporizador cada 0.1 segundos
setInterval(() => {
    const elapsed = (Date.now() - starTime) / 1000; //Tiempo en segundos
    timerDisplay.textContent = `Tiempo: ${elapsed.toFixed(1)} segundos`; //Muestra con un decimal
}, 100);

//7: Se implementa el sonido "clic" al pulsar el botón "Seguir"
followBtn.addEventListener('click' , () => {
    //Se calcula el tiempo hasta hacer clic
    const elapsed = (Date.now() - starTime) / 1000;

    //Al usuario se le muestra una alerta con los resultados
    alert(`¡Gracias por participar, muy valiosa su colaboración!\nVersión: ${version}\nTiempo hasta clic: ${elapsed.toFixed(2)} segundos`);

    //Con las siguientes lineas se registran los datos en consola
    console.log({
        version: version,
        timeToClick: elapsed.toFixed(2),
    });

    //Redirigimos a una página de agradecimiento
     setTimeout(() => {
    window.location.href = 'gracias.html';
  }, 500); // Espera medio segundo antes de redirigir
})

