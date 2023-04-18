/*
  En un juego de pelea un personaje utiliza un skill.
    La skill funciona de esta manera:
    El contrincante recibirá 10 golpes
    Cada uno de esos golpes proporciona un daño que varia entre 1000 y 2000 de manera aleatoria
        a.Muestre cual fue el daño recibido por el contrincante en cada golpe
        b.Muestre el daño total final que el enemigo recibió
 */
const DB_GOLPES = [
    ["barrido"],
    ["cross"],
    ["jab"],
    ["volea"],
    ["patada de hacha"],
    ["roundhuose kick"],
    ["hook"],
    ["crochet"],
    ["swing"],
    ["patada de gancho"],
    ["uppercut"],
], cantidad_golpes = 10;
let puntaje_golpe_recibido = [], confirmacion = confirm('¿Desea comenzar el juego?'), max = 0, golpeEncontrado, suma = 0;

cargarDañoGolpes();

while (confirmacion) {
    let contrincante1 = prompt('Ingrese nombre del conticrante 1: '), contrincante2 = prompt('Ingrese nombre del conticrante 2: ');
    if (contrincante1.length !== 0 && contrincante2.length !== 0) {
        skill(contrincante1,contrincante2);
    } else {
        alert("ingrese un nombre correcto...");
    }
    confirmacion = confirm('¿Desea volver a jugar?');
}


function skill(nombre_1, nombre_2) {
    let vida_nombre_2=20000;
    alert(`${nombre_1} VS ${nombre_2}`);
    for (let index = 0; index < cantidad_golpes; index++) {
        let posicion = numeroRandom(0, 10);
        alert(`GOLPE RECIBIDO: ${DB_GOLPES[posicion][0]} - PUNTAJE: ${DB_GOLPES[posicion][1]}`);
        vida_nombre_2 = vida_nombre_2 - DB_GOLPES[posicion][1];
        alert(`VIDA RESTANTE de ${nombre_2}: ${vida_nombre_2}`);
        suma = suma + DB_GOLPES[posicion][1];
        puntaje_golpe_recibido.push(DB_GOLPES[posicion][1]);
    }
    max = Math.max(...puntaje_golpe_recibido);
    golpeEncontrado = DB_GOLPES.find(element => element[1] == max);
    alert(`EL DAÑO MAXIMO ES: ${max} - ${golpeEncontrado[0]}`);
    alert(`EL DAÑO TOTAL ES: ${suma}`);
}

function cargarDañoGolpes() {
    for (let index = 0; index < DB_GOLPES.length; index++) {
        const element = DB_GOLPES[index];
        element.push(numeroRandom(1000, 2000));
    }
}
function numeroRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
