let intentos = 0;
let limiteDeIntentos = 3;
let numeroSecreto = 0;
let listaNumeros = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let textoHTML = document.querySelector(elemento);
    textoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(numeroSecreto);

    if (numeroDeUsuario === numeroSecreto){
        // el usuario acerto
        asignarTexto('p', `Felicidades, has acertado en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('otraVez').setAttribute('disabled', 'true');
      } else { 
        //el usario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTexto('p', 'El número es menor');
         } else {
            asignarTexto('p', 'El número es mayor');   
            }
            intentos++;
            limpiarInput();
            if (intentos > limiteDeIntentos){
                asignarTexto('p', `Juego terminado, has agotado los ${limiteDeIntentos} intentos maximos que tenias.`);
                document.getElementById('otraVez').setAttribute('disabled', 'true');
                document.getElementById('reiniciar').removeAttribute('disabled');
            } 
        }
        return;
}

function limpiarInput(){
    let inputValue = document.querySelector('#valorUsuario').value = '';
    return;
}

function condicionesIniciales(){
    asignarTexto('h1', 'Adivina el número secreto');
    asignarTexto('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroRandom();
    intentos = 1;
    if (numeroSecreto === null){
        document.getElementById('otraVez').setAttribute('disabled', 'true');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        document.getElementById('otraVez').removeAttribute('disabled');
        document.getElementById('reiniciar').setAttribute('disabled', 'true');
    }
}

function reiniciarJuego(){
    //limpiar input box
    limpiarInput();
    //indicar intervalo de numeros
    //generar numero aleatorio
    //reiniciar intentos
    condicionesIniciales();
    //apagar el boton de nuevo juego
    return;
}

function numeroRandom(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumeros);
    //si ya jugamos todos los numeros
    if (listaNumeros.length == numeroMaximo){
        asignarTexto('p','Ya jugaste todos los números posibles');
        listaNumeros = [];
        return null;
    } else {
        //numero generado incluido en la lista
        if (listaNumeros.includes(numeroGenerado)){
            return numeroRandom();
        //numero generado no incluido en la lista
        } else {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

condicionesIniciales();