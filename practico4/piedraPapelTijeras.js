const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERAS = "tijeras";
const readlineSync = require(`readline-sync`);
function obtenerJugadaComputadora() {
    const opciones = [PIEDRA, PAPEL, TIJERAS];
    const indice = Math.floor(Math.random()*opciones.length );
return opciones[indice];
}

function obtenerJugadaUsuario() {
    let jugadaUsuario = readlineSync.question('Por favor ingrese su jugada "piedra", "papel" o "tijeras"').toLowerCase();
   return jugadaUsuario;
}

function determinarGanador(jugadaComputador, jugadaUsuario) {
    if (jugadaComputador === jugadaUsuario) {
    return "Empate";
    } else if (
(jugadaComputador === PIEDRA && jugadaUsuario === TIJERAS) ||
(jugadaComputador === TIJERAS && jugadaUsuario === PAPEL) ||
(jugadaComputador === PAPEL && jugadaUsuario === PIEDRA )
    ) { return "Gana la computadora";
    } else {
        return "Gana el usuario";
    }
}
function jugarPiedraPapelTijeras() {
    let jugadas
    do {
        jugadas = readlineSync.question("¿En cuantas jugadas quieres terminar el juego?");
    } while (jugadas <= 0 || jugadas > 3 || isNaN(jugadas));

    let contadorComputadora = 0;
    let contadorUsuario = 0;

    for (let i = 1; i <= jugadas; i++) {
        console.log(`Jugada ${i}:`);

        const jugadaComputador = obtenerJugadaComputadora();
        const jugadaUsuario = obtenerJugadaUsuario();

        console.log(`La computadora eligió: ${jugadaComputador}`);
        console.log(`El usuario eligió: ${jugadaUsuario}`);

        const resultado = determinarGanador(jugadaComputador,jugadaUsuario);
        console.log(`El resultado de la jugada ${i} es: ${resultado}`);

        if (resultado === "Gana la computadora") {
            contadorComputadora++;
        } else if (resultado === "Gana el usuario") {
            contadorUsuario++;
        }
    }
    if (contadorComputadora > contadorUsuario) {
        console.log("La computadora ha ganado el juego.");
    } else if (contadorComputadora < contadorUsuario) {
        console.log("El usuario ha ganado el juego.");
    } else {
        console.log("El juego ha terminado en empate.");
    }
   
}
jugarPiedraPapelTijeras();



