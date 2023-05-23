//Leemos el valor que se ingresa en el input
var input = document.querySelector("#mensaje_ingresado");
input.focus();
var textoEntrada, textoSalida;

function encriptar(){
    textoEntrada = input.value.toLowerCase().split(''); /*Accedemos al valor del input, 
    lo convertimos todo a minúsculas y hacemos que sea un arreglo, para que cada letra sea un elemento */
    console.log(textoEntrada);
    document.addEventListener("click", visibilidad_contenido);

    for (let index = 0; index < textoEntrada.length; index++) { //Iteramos el arreglo y evaluamos las vocales
        switch (textoEntrada[index]) {
            case 'a':
                textoEntrada[index] = 'ai';
                break;
            case 'e':
                textoEntrada[index] = 'enter';
                break;
            case 'i':
                textoEntrada[index] = 'imes';
                break;
            case 'o':
                textoEntrada[index] = 'ober';
                break;
            case 'u':
                textoEntrada[index] = 'ufat';
                break;
            default:
                break;
        }
    }
    textoSalida = textoEntrada.join(''); //Junto todos los elementos del arreglo para tener el texto encriptado
    document.getElementById("textoSalida").innerHTML = textoSalida;
}

function copiar() {
    navigator.clipboard.readText().then(textoSalida => {
        alert("Texto copiado");
    })
    .catch(err => {
        alert("No se copio el texto")
    })

    navigator.clipboard.writeText(textoSalida).then((input.value = ""))
      
    
    input.focus();
}

function desencriptar() {
    textoEntrada = input.value.toLowerCase();
    document.addEventListener("click", visibilidad_contenido);
    //El primer valor cambia por el segundo, ejemplo -> "ai" cambia a la letra "a"
    textoEntrada = textoEntrada.replaceAll("ai", "a");
    textoEntrada = textoEntrada.replaceAll("enter", "e");
    textoEntrada = textoEntrada.replaceAll("imes", "i");
    textoEntrada = textoEntrada.replaceAll("ober", "o");
    textoEntrada = textoEntrada.replaceAll("ufat", "u");
    textoSalida = textoEntrada;

    document.getElementById("textoSalida").innerHTML = textoSalida;
    
}


//Función para esconder el contenido del input que encriptar y desencriptar el texto
function visibilidad_contenido() {
    document.getElementById("imgInput").style.display = "none";
    document.getElementById("btn_copiar").style.display = "block";
}

//Botón para encriptar
var btn_encriptador = document.querySelector("#Encriptador");
btn_encriptador.onclick = encriptar;

//Botón para desencriptar
var btn_desencriptar = document.querySelector("#Desencriptador");
btn_desencriptar.onclick = desencriptar;

//Botón para copiar el texto
var btn_copiar = document.querySelector("#btn_copiar");
btn_copiar.onclick = copiar;

