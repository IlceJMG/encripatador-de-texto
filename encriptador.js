let textoEncriptar = document.getElementById("textoEncriptar")
let divResultado = document.getElementById("divResultado")
let cajaInicial= document.getElementById("cajainicial")
let cajaresultado= document.getElementById("cajaresultado")

cajaresultado.style.display = 'none'

function ocultarCajaInicial() {
    cajaInicial.style.display = 'none'
    cajaresultado.style.display = 'inline'
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function cifrar(){

    var texto= textoEncriptar.value;
    var textoCifrado= texto;
    textoCifrado= replaceAll(textoCifrado, "e", "enter");
    textoCifrado= replaceAll(textoCifrado, "i", "imes");
    textoCifrado= replaceAll(textoCifrado, "a", "ai");
    textoCifrado= replaceAll(textoCifrado, "o", "ober");
    textoCifrado= replaceAll(textoCifrado, "u", "ufat");

    divResultado.innerText=textoCifrado;
    ocultarCajaInicial()
}

function descifrar() {

    var texto= textoEncriptar.value;
    var textoDescifrado= texto;
    textoDescifrado= replaceAll(textoDescifrado, "enter", "e");
    textoDescifrado= replaceAll(textoDescifrado, "imes", "i");
    textoDescifrado= replaceAll(textoDescifrado, "ai", "a");
    textoDescifrado= replaceAll(textoDescifrado, "ober", "o");
    textoDescifrado= replaceAll(textoDescifrado, "ufat", "u");

    divResultado.innerText=textoDescifrado;
    ocultarCajaInicial()

}

async function copiarContenido() {
    try {
      await navigator.clipboard.writeText(divResultado.innerText);
      console.log('Contenido copiado al portapapeles');
    } catch (err) {
      console.error('Error al copiar: ', err);
    }
  }


