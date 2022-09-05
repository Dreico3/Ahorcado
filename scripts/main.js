const btnNuevaPalabra=document.querySelector("#btn-agregar-palabra");
const btnCancelar=document.querySelector("#btn-cancelar");
const btnIniciarJuego=document.querySelector('#btn-iniciar-juego');
const btnDesistir=document.querySelector('#btn-rendirse');
const btnGuardarEmpezar=document.querySelector('#btn-guardar');
const cajaAdivina=document.querySelector(".adivina");
const btnNuevoJuego=document.querySelector("#botones-jugar");

var palabras=["perro", "card", "los", "un"];
function VaciarCaja(){
    while (cajaAdivina.firstChild){
        cajaAdivina.removeChild(cajaAdivina.firstChild);
    };
}
function ReiniciarJuego(){
    VaciarCaja();
    EsconderPalabra(retornaAleatorio());
}
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

function ControladorTeclas(e){
    let palabra=palabras[idPalabra];
    if(e.target.value==palabra[e.target.id-1]){
        console.log("son iguales");
    }else{
        console.log("fallaste perra");
    }
}
function EsconderPalabra(pa){
    //console.log(retornaAleatorio());
    idPalabra=pa[1];
    for (let i=1;i<=pa[0].length;i++){
        var ele=document.createElement("input");
        ele.setAttribute("id", i);
        ele.setAttribute("class", "pa");
        ele.setAttribute("maxlength", "1");
        ele.onchange=ControladorTeclas;
        cajaAdivina.appendChild(ele);
    }
}
function retornaAleatorio(){
    var r=Math.floor(Math.random() * palabras.length);
    return [palabras[r],r]
}
function IniciarJuego(){
    document.querySelector("#botones-inicio").style.display="none";
    document.querySelector("#botones-jugar").style.display="block";
    document.querySelector(".cont-jugar").style.display="block";
    VaciarCaja();
    EsconderPalabra(retornaAleatorio())
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
btnNuevoJuego.onclick=ReiniciarJuego;



/* const el = document.querySelector('.selector');
el.classList.contains('someClass');
el.classList.add('newClass');
el.classList.remove('otherClass'); */