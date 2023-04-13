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

    // variables para cada vocal 
    let encripA = "ai";
    let encripE = "enter";
    let encripI = "imes";
    let encripO = "ober";
    let encripU = "ufat";

    // recorro el vector y usando if cambio las vocales 
    for (var i = 0; i < numCaracter; i++) {
        if (mensaje[i] == "a") {
            mensaje[i] = encripA;
        } else if (mensaje[i] == "e") {
            mensaje[i] = encripE;
        } else if (mensaje[i] == "i") {
            mensaje[i] = encripI;
        } else if (mensaje[i] == "o") {
            mensaje[i] = encripO;
        } else if (mensaje[i] == "u") {
            mensaje[i] = encripU;
        }
        console.log(mensaje[i]);
    }


    // recorro el vector y lo muestro en la pantalla 
    for (let i = 0; i < numCaracter; i++) {
        // con .join("") logro sacar las "," que se ponen por defecto  
        document.getElementById("visor_mensaje").value = mensaje.join("");
    }
}
let buttonEncriptar = document.getElementById("encriptar");
buttonEncriptar.onclick = encriptador


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
