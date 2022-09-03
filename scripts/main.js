const btnNuevaPalabra=document.querySelector("#btn-agregar-palabra");
const btnCancelar=document.querySelector("#btn-cancelar");
const btnIniciarJuego=document.querySelector('#btn-iniciar-juego');
const btnDesistir=document.querySelector('#btn-rendirse');
const btnGuardarEmpezar=document.querySelector('#btn-guardar');
const cajaAdivina=document.querySelector(".adivina");

var palabras=["perro", "casa", "rama"];

function CambiarAagregar(){
    document.querySelector("#botones-inicio").style.display="none";
    document.querySelector("#botones-agregar").style.display="block";
    document.querySelector(".cont-agregar").style.display="block";
}
function Cancelar(){
    document.querySelector("#botones-inicio").style.display="block";
    document.querySelector("#botones-agregar").style.display="none";
    document.querySelector(".cont-agregar").style.display="none";
}
function EsconderPalabra(pa){
    for (let i=1;i<pa.length;i++){
        
        var ele=document.createElement("input");
        ele.setAttribute("id", i);
        ele.setAttribute("class", "pa");
        ele.setAttribute("maxlength", "1");
        cajaAdivina.appendChild(ele);
    }
}
function IniciarJuego(){
    document.querySelector("#botones-inicio").style.display="none";
    document.querySelector("#botones-jugar").style.display="block";
    document.querySelector(".cont-jugar").style.display="block";
    EsconderPalabra("abatojar")
}
function Rendirse(){
    document.querySelector("#botones-inicio").style.display="block";
    document.querySelector("#botones-jugar").style.display="none";
    document.querySelector(".cont-jugar").style.display="none";
}
function GuardarEmpezar(){
    Cancelar()
    IniciarJuego();
    var palabra=document.querySelector("#inp-palabra").value;
    palabras.push(palabra);
    console.log(palabras);
    document.querySelector("#inp-palabra").value="";
}
btnNuevaPalabra.onclick = CambiarAagregar; 
btnCancelar.onclick=Cancelar;
btnIniciarJuego.onclick=IniciarJuego;
btnDesistir.onclick=Rendirse;
btnGuardarEmpezar.onclick=GuardarEmpezar;



/* const el = document.querySelector('.selector');
el.classList.contains('someClass');
el.classList.add('newClass');
el.classList.remove('otherClass'); */