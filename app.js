let numeroSecreto;
let Intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento); //ya es una function generica
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      ".texto__parrafo",
      `Acertaste! en ${Intentos} ${Intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el user no acerto
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento(".texto__parrafo", "El secreto es menor");
    } else {
      asignarTextoElemento(".texto__parrafo", "El secreto es mayor");
    }
    Intentos++;
    limpiarCajas();
  }

  return;
}

function limpiarCajas() {
  let valorCaja = (document.querySelector("#valorUsuario").value = "");
  // valorCaja.value = "";
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  //si el numero ya supero el maximo de la lista
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento(
      ".texto__parrafo",
      "Ya se sortearon todos los numeros posibles"
    );
  } else {
    //si el numero generado esta en la lista
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto(); //si el numero esta repetido se repite la funcion
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del adivinador");
  asignarTextoElemento(
    ".texto__parrafo",
    `Indica un numero del 1 al ${numeroMaximo} `
  );
  numeroSecreto = generarNumeroSecreto();
  Intentos = 1;
}
function reiniciarJuego() {
  limpiarCajas();

  condicionesIniciales();

  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
