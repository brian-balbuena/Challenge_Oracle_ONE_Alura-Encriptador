let textEntrada = document.getElementById("text_entrada");
textEntrada.focus();

// variables para cada vocal 
let encripA = "ai";
let encripE = "enter";
let encripI = "imes";
let encripO = "ober";
let encripU = "ufat";

// funcion para encriptar 
function encriptador() {
    // limpio la pantalla del traductor 
    document.getElementById("traductor_alert").style.display = "none";
    // capturo el contenido del textarea 
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
    for (var i = 0; i < numCaracter; i++) {
        // con .join("") logro sacar las "," que se ponen por defecto  
        document.getElementById("visor_mensaje").value = mensajeEncriptado.join("");
    }


    // aparece boton copy 
    document.getElementById("copy").style.display = "inline";
}
// asigno el botto encriptar 
let buttonEncriptar = document.getElementById("encriptar");
// cuando se clickea llama a la funcion encriptar 
buttonEncriptar.onclick = encriptador

// funcion desencriptar 
function desencriptar() {
    // limpio la pantalla del traductor 
    document.getElementById("traductor_alert").style.display = "none";
    // reseto la pantalla donde se muestra el mensaje 
    document.getElementById("visor_mensaje").value = '';
    // capturo el contenido del textarea 
    let textEntrada = document.getElementById("text_entrada").value;
    console.log(textEntrada);
    // separo cada caracter del string dentro de un vector
    let mensaje = textEntrada.split('');
    console.log(mensaje);
    // saco la cantidad de caracteres que tiene el string 
    let numCaracter = textEntrada.length;
    console.log(numCaracter);

    // contador de caracteres que se le agrega a cada vocal 
    let agregadoA = encripA.length;
    let agregadoE = encripE.length;
    let agregadoI = encripI.length;
    let agregadoO = encripO.length;
    let agregadoU = encripU.length;
    console.log(agregadoA);

    // para mejorar el mantenimiento del codigo, aca lee la cantidad de caracteres que agrega en cada vocal 
    let desencriptarA = agregadoA - 1;
    let desencriptarE = agregadoE - 1;
    let desencriptarI = agregadoI - 1;
    let desencriptarO = agregadoO - 1;
    let desencriptarU = agregadoU - 1;
    console.log(desencriptarA);

    // recorro el vector y desencripto el mensaje 
    for (var i = 0; i < numCaracter; i++) {
        if (mensaje[i] == "a") {
            mensaje.splice((i + 1), desencriptarA);
        } else if (mensaje[i] == "e") {
            mensaje.splice((i + 1), desencriptarE);
        } else if (mensaje[i] == "i") {
            mensaje.splice((i + 1), desencriptarI);
        } else if (mensaje[i] == "o") {
            mensaje.splice((i + 1), desencriptarO);
        } else if (mensaje[i] == "u") {
            mensaje.splice((i + 1), desencriptarU);
        }

    }

    // recorro el vector y lo muestro en la pantalla 
    for (var i = 0; i < numCaracter; i++) {
        // con .join("") logro sacar las "," que se ponen por defecto  
        document.getElementById("visor_mensaje").value = mensaje.join("");
    }

    // aparece boton copy 
    document.getElementById("copy").style.display = "inline";
}
let buttonDesencriptar = document.getElementById("desencriptar");
buttonDesencriptar.onclick = desencriptar

// boton copiar 
function copiarTexto() {
    let textarea = document.getElementById("visor_mensaje");

    // Selecciona el texto dentro del textarea
    textarea.focus();
    textarea.select();

    // Copia el texto seleccionado al portapapeles del usuario
    document.execCommand("copy");

    // reseteo la pantalla donde se ingresa el mensaje 
    document.getElementById("text_entrada").value = '';
}

let buttonCopy = document.getElementById("botones_copy");
buttonCopy.onclick = copiarTexto
