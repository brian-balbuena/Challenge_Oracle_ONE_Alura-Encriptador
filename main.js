let textEntrada = document.getElementById("text_entrada");
textEntrada.focus();



function encriptador() {
    let textEntrada = document.getElementById("text_entrada").value;
    console.log(textEntrada);
    // separo cada caracter del string dentro de un vector
    let mensaje = textEntrada.split('');
    console.log(mensaje);
    // saco la cantidad de caracteres que tiene el string 
    let numCaracter = textEntrada.length;
    console.log(typeof numCaracter);
    // creo una nueva variable donde alojo el mensaje encriptado para no sobreescribir el mensaje original 
    let mensajeEncriptado = mensaje;

    // variables para cada vocal 
    let encripA = "ai";
    let encripE = "enter";
    let encripI = "imes";
    let encripO = "ober";
    let encripU = "ufat";

    // recorro el vector y usando if cambio las vocales 
    for (var i = 0; i < numCaracter; i++) {
        if (mensajeEncriptado[i] == "a") {
            mensajeEncriptado[i] = encripA;
        } else if (mensajeEncriptado[i] == "e") {
            mensajeEncriptado[i] = encripE;
        } else if (mensajeEncriptado[i] == "i") {
            mensajeEncriptado[i] = encripI;
        } else if (mensaje[i] == "o") {
            mensajeEncriptado[i] = encripO;
        } else if (mensaje[i] == "u") {
            mensajeEncriptado[i] = encripU;
        }
        console.log(mensajeEncriptado[i]);
    }


    // recorro el vector y lo muestro en la pantalla 
    for (let i = 0; i < numCaracter; i++) {
        // con .join("") logro sacar las "," que se ponen por defecto  
        document.getElementById("visor_mensaje").value = mensajeEncriptado.join("");
    }

    document.getElementById("text_entrada").value = '';
}
let buttonEncriptar = document.getElementById("encriptar");
buttonEncriptar.onclick = encriptador

function desencriptar(){

}


function copiarTexto() {
    let textarea = document.getElementById("visor_mensaje");

    // Selecciona el texto dentro del textarea
    textarea.focus();
    textarea.select();

    // Copia el texto seleccionado al portapapeles del usuario
    document.execCommand("copy");

    // Deselecciona el texto
    textarea.blur();
}

let buttonCopy = document.getElementById("botones_copy");
buttonCopy.onclick = copiarTexto
